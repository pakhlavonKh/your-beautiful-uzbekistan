import { motion } from "framer-motion";
import { Bed, Armchair, Archive, Lamp, Sofa } from "lucide-react";

const items = [
  { name: "Кровати", icon: Bed },
  { name: "Шкафы", icon: Archive },
  { name: "Комоды", icon: Archive },
  { name: "Столы и стулья", icon: Lamp },
  { name: "Мягкая мебель", icon: Sofa },
  { name: "Матрасы", icon: Armchair },
];

export const FurnitureItems = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
          Предметы мебели
        </h2>
        <p className="text-muted-foreground">Подбор мебели по категориям</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-accent hover:shadow-md transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center group-hover:bg-accent transition-colors">
                <Icon className="w-5 h-5 text-gold-dark group-hover:text-accent-foreground transition-colors" />
              </div>
              <span className="text-sm font-semibold text-card-foreground uppercase tracking-wide">
                {item.name}
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  </section>
);
