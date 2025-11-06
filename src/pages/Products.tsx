import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const Products = () => {
  const products = [
    {
      name: "Personalized Photo Frame",
      price: 899,
      description: "Beautiful wooden frame with custom engraving for your cherished memories",
      image: product1,
    },
    {
      name: "Handmade Candle Set",
      price: 699,
      description: "Set of 3 aromatic soy candles in elegant glass containers",
      image: product2,
    },
    {
      name: "Custom Gift Hamper",
      price: 1499,
      description: "Curated basket with chocolates, snacks, and personalized card",
      image: product3,
    },
    {
      name: "Artisan Coffee Mug",
      price: 449,
      description: "Hand-painted ceramic mug with personalized message",
      image: product4,
    },
    {
      name: "Memory Scrapbook",
      price: 799,
      description: "Beautifully crafted scrapbook to preserve special moments",
      image: product5,
    },
    {
      name: "Luxury Gift Box",
      price: 1999,
      description: "Premium collection of artisan chocolates and handmade treats",
      image: product6,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of thoughtfully crafted gifts. Each item can be customized to make it extra special!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
