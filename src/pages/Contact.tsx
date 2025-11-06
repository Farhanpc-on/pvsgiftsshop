import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to know more about your products";
    const whatsappUrl = `https://wa.me/919944953854?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Reach out with any questions or special requests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-card to-secondary/30 rounded-2xl p-8 shadow-lg space-y-4 animate-in fade-in slide-in-from-left-4 duration-1000 delay-200">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Chat with Us</h2>
              <p className="text-foreground/70">
                Get instant responses to your queries via WhatsApp. We're here to help!
              </p>
              <Button 
                onClick={handleWhatsAppContact}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium mt-4 group"
              >
                <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                Chat on WhatsApp
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-card to-secondary/30 rounded-2xl p-8 shadow-lg space-y-4 animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Email Us</h2>
              <p className="text-foreground/70">
                For detailed inquiries or custom orders, drop us an email.
              </p>
              <a 
                href="mailto:contact@pvsgiftshop.com"
                className="block w-full text-center bg-secondary hover:bg-secondary/80 text-foreground font-medium py-3 px-4 rounded-lg transition-colors mt-4"
              >
                contact@pvsgiftshop.com
              </a>
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-2xl p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">Working Hours</h2>
            <p className="text-foreground/80 text-lg">
              Monday – Saturday
            </p>
            <p className="text-foreground/80 text-lg font-semibold">
              10:00 AM – 6:00 PM
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              We typically respond within a few hours during business hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
