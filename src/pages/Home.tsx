import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, Heart, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gift className="w-12 h-12 text-primary animate-bounce" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Welcome to PVSGiftShop
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Unique Gifts for Every Occasion
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              Discover thoughtfully curated, handmade gifts that bring joy to your loved ones. 
              Every piece is crafted with love and care.
            </p>
            
            <Link to="/products" className="animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Shop Now
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3 p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Unique Selection</h3>
              <p className="text-muted-foreground">
                Carefully curated gifts you won't find anywhere else
              </p>
            </div>
            
            <div className="text-center space-y-3 p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Made with Love</h3>
              <p className="text-muted-foreground">
                Each gift is handcrafted with attention to detail
              </p>
            </div>
            
            <div className="text-center space-y-3 p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Perfect for Any Occasion</h3>
              <p className="text-muted-foreground">
                Birthdays, anniversaries, or just because moments
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
