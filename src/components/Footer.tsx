import { MapPin, Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Адрес */}
          <div>
            <div className="flex items-start gap-3 mb-2">
              <MapPin className="w-5 h-5 text-destructive shrink-0 mt-1" />
              <div>
                <p className="text-foreground">ЖК Испанские кварталы</p>
                <p className="text-foreground">Бульвар Веласкеса 5к1</p>
              </div>
            </div>
          </div>

          {/* Часы работы */}
          <div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-foreground shrink-0 mt-1" />
              <div>
                <p className="text-foreground mb-1">Часы работы:</p>
                <p className="text-muted-foreground">пн-чт 10:00 - 23:00</p>
                <p className="text-muted-foreground">пт-вс 10:00 - 24:00</p>
              </div>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-destructive shrink-0 mt-1" />
              <div>
                <p className="text-foreground mb-2">Бронь:</p>
                <p className="text-[#7c3aed] mb-1"><a href="https://t.me/message_forest" className="telegram-link" target="_blank">@message_forest</a></p>
                <p className="text-foreground">+7 (999) 981-72-17</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}