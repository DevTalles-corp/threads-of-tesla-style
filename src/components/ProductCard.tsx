import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group border-0 shadow-none product-card-hover cursor-pointer">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted rounded-lg">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="image-overlay" />
        </div>
        
        <div className="pt-4 space-y-2">
          <div className="space-y-1">
            <h3 className="font-medium text-sm tracking-tight">{name}</h3>
            <p className="text-xs text-muted-foreground uppercase">{category}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="font-semibold">${price}</p>
            <Button 
              size="sm" 
              className="button-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Agregar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;