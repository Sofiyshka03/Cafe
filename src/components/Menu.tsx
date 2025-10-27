import { MenuItem } from "./MenuItem";

export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface MenuProps {
  items: MenuItemType[];
  selectedCategory: string;
}

export function Menu({ items, selectedCategory }: MenuProps) {
  if (items.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-muted-foreground">
          <p>Блюда не найдены. Попробуйте изменить параметры поиска.</p>
        </div>
      </section>
    );
  }

  // Группируем блюда по категориям
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItemType[]>);

  const categories = Object.keys(groupedItems).sort();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-primary mb-6 text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ fontSize: '2rem', fontWeight: '800' }}>{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {groupedItems[category].map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}