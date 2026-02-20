import { useState } from "react";
import { Phone, Search, ShoppingCart, Menu, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Спальни", "Гостиные", "Детские", "Прихожие",
  "Офисы", "Кухни", "Мягкая мебель", "Шкафы",
  "Комоды", "Столы и стулья", "Кровати", "Матрасы",
];

const topLinks = [
  "О компании", "Наши бренды", "Оплата", "Рассрочка",
  "Доставка и сборка", "Акции",
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="hidden lg:block border-b border-border">
        <div className="container flex items-center justify-between py-2 text-sm">
          <nav className="flex items-center gap-6">
            {topLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
            <a href="#" className="text-accent font-semibold flex items-center gap-1">
              🔥 Распродажа
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Поиск..."
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-40"
            />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          шатура
        </a>

        <div className="hidden md:flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Send className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Ташкент</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">9:00 до 18:00</p>
            <a href="tel:+998900531112" className="text-lg font-semibold text-foreground">
              +998 90 053 11 12
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-foreground text-primary-foreground text-xs flex items-center justify-center font-semibold">
              0
            </span>
          </button>
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Categories bar */}
      <div className="hidden lg:block border-t border-border bg-secondary">
        <div className="container">
          <nav className="flex items-center justify-between py-3">
            {categories.map((cat) => (
              <a
                key={cat}
                href="#"
                className="text-xs font-semibold uppercase tracking-wider text-secondary-foreground hover:text-accent transition-colors"
              >
                {cat}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="container py-4 space-y-3">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="block text-sm font-medium text-foreground hover:text-accent transition-colors py-1"
                >
                  {cat}
                </a>
              ))}
              <div className="pt-3 border-t border-border">
                <a href="tel:+998900531112" className="flex items-center gap-2 text-foreground font-semibold">
                  <Phone className="w-4 h-4" />
                  +998 90 053 11 12
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
