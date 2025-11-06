import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard = ({ name, price, description, image }: ProductCardProps) => {
  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in the ${name}`;
    const whatsappUrl = `https://wa.me/919944953854?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-card to-secondary/30">
      <div className="aspect-square overflow-hidden bg-secondary/50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-foreground line-clamp-1">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <p className="text-xl font-bold text-primary">₹{price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleWhatsAppOrder}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-md group"
        >
          <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
          Order via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
