import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Логотип */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-primary rounded-full shadow-lg flex items-center justify-center" style={{ width: '56px', height: '56px', padding: '4px' }}>
              <div className="text-center leading-tight font-serif italic" style={{ lineHeight: '1' }}>
                <div 
                  style={{ 
                    background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 25%, #ffd700 50%, #cc8a00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 'bold',
                    fontSize: '10px',
                    letterSpacing: '0.3px'
                  }}
                >
                  Forest
                </div>
                <div 
                  style={{ 
                    background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 25%, #ffd700 50%, #cc8a00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '7px',
                    letterSpacing: '0.2px'
                  }}
                >
                  гранд-кафе
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-primary font-semibold">Forest гранд-кафе</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Как дома. Только лучше.
              </p>
            </div>
          </div>

          {/* Поиск */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск блюд..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-secondary border-0 focus-visible:ring-accent"
            />
          </div>
        </div>
      </div>
    </header>
  );
}