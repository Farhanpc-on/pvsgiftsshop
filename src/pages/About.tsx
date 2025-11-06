import Navbar from "@/components/Navbar";
import { Heart, Package, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">About PVSGiftShop</h1>
            <p className="text-lg text-muted-foreground">
              Where Every Gift Tells a Story
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-card to-secondary/30 rounded-2xl p-8 shadow-lg animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Our Story</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    At PVSGiftShop, we believe that the best gifts come from the heart. 
                    We started with a simple mission: to help people express their love and appreciation 
                    through unique, thoughtfully crafted gifts. Each item in our collection is carefully 
                    selected or handmade to ensure it brings joy to both the giver and receiver.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-card to-secondary/30 rounded-2xl p-8 shadow-lg animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">What We Offer</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    We specialize in handmade and personalized gifts perfect for any occasion:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                      Custom photo frames and memory keepsakes
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                      Artisan candles and home decor
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                      Personalized gift hampers and boxes
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                      Handcrafted accessories and keepsakes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-2xl p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Our Promise</h2>
              <p className="text-foreground/80 leading-relaxed">
                Every gift from PVSGiftShop is wrapped with care and delivered with love. 
                We're committed to making your gift-giving experience as special as the moments you're celebrating.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
