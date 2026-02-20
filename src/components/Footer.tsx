import { Phone, MapPin, Clock } from "lucide-react";

const footerLinks = {
  "Каталог": ["Спальни", "Гостиные", "Детские", "Кухни", "Офисы", "Прихожие"],
  "Покупателям": ["Оплата", "Рассрочка", "Доставка и сборка", "Гарантия"],
  "О нас": ["О компании", "Наши бренды", "Акции", "Контакты"],
};

export const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="font-display text-2xl font-bold text-foreground mb-4 block">
            шатура
          </a>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>г. Ташкент</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <a href="tel:+998900531112" className="hover:text-foreground transition-colors">
                +998 90 053 11 12
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0" />
              <span>9:00 – 18:00</span>
            </div>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-foreground mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container py-4 text-center text-xs text-muted-foreground">
        © 2025 Шатура. Все права защищены.
      </div>
    </div>
  </footer>
);
