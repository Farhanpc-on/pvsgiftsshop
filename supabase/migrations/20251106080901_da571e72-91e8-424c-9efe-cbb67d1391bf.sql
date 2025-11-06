-- Create enum for user roles
create type public.app_role as enum ('admin', 'user');

-- Create user_roles table
create table public.user_roles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    role app_role not null,
    unique (user_id, role)
);

-- Enable RLS on user_roles
alter table public.user_roles enable row level security;

-- Create security definer function to check roles
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- Drop existing permissive policies on products table
drop policy if exists "Anyone can insert products" on public.products;
drop policy if exists "Anyone can update products" on public.products;
drop policy if exists "Anyone can delete products" on public.products;

-- Create new admin-only policies for products table
create policy "Only admins can insert products"
on public.products
for insert
to authenticated
with check (public.has_role(auth.uid(), 'admin'));

create policy "Only admins can update products"
on public.products
for update
to authenticated
using (public.has_role(auth.uid(), 'admin'));

create policy "Only admins can delete products"
on public.products
for delete
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- RLS policies for user_roles table
create policy "Users can view their own roles"
on public.user_roles
for select
to authenticated
using (auth.uid() = user_id);

create policy "Only admins can manage roles"
on public.user_roles
for all
to authenticated
using (public.has_role(auth.uid(), 'admin'));