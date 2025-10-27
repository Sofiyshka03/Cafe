import { Button } from "./ui/button";

interface CategoriesProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Categories({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoriesProps) {
  return (
    <section className="bg-secondary py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-primary mb-4 sm:mb-6">Категории</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
              className={
                selectedCategory === category
                  ? "bg-primary hover:bg-primary/90 text-white border-0"
                  : "border-primary/20 text-primary hover:bg-primary/10"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
