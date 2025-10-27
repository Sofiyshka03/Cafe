import { Card, CardContent, CardFooter } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export function MenuItem({
  name,
  description,
  price,
  image,
}: MenuItemProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-border/50 flex flex-col h-full">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <span className="text-accent">{price} ₽</span>
        </div>
      </CardFooter>
    </Card>
  );
}