import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const promos = [
  { title: "от 5% скидка на Белорусские диваны", deadline: "до 21 марта", image: "https://shatura.uz/uploads/posts/ot-5-skidka-na-belorusskie-divany.jpeg" },
  { title: "Спец цена на Российский матрас Dream", deadline: "до 21 марта", image: "https://shatura.uz/uploads/posts/spec-cena-na-rossiyskiy-matras-dream-happy.jpeg" },
  { title: "Скидка 15% на офисную мебель", deadline: "до 21 марта", image: "https://shatura.uz/uploads/posts/skidka-15-ofisnaya-mebel.jpeg" },
];

export const PromotionsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
          Акции и скидки
        </h2>
        <p className="text-muted-foreground">Лучшие предложения этого сезона</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promos.map((promo, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider rounded mb-3">
                Акция
              </span>
              <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">
                {promo.title}
              </h3>
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                <Clock className="w-3.5 h-3.5" />
                {promo.deadline}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
