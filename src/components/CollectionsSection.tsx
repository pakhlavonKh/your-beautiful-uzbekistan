import { motion } from "framer-motion";
import collectionLiving from "@/assets/collection-living.jpg";
import collectionKitchen from "@/assets/collection-kitchen.jpg";
import collectionKids from "@/assets/collection-kids.jpg";
import collectionOffice from "@/assets/collection-office.jpg";
import collectionHallway from "@/assets/collection-hallway.jpg";
import heroBedroom from "@/assets/hero-bedroom.jpg";

const collections = [
  { name: "Спальни", image: heroBedroom },
  { name: "Гостиные", image: collectionLiving },
  { name: "Детские", image: collectionKids },
  { name: "Прихожие", image: collectionHallway },
  { name: "Офисы", image: collectionOffice },
  { name: "Кухни", image: collectionKitchen },
];

export const CollectionsSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
          Коллекции
        </h2>
        <p className="text-muted-foreground">Мебель в одном стиле, цвете и фактуре</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {collections.map((col, i) => (
          <motion.a
            key={col.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-square rounded-lg overflow-hidden"
          >
            <img
              src={col.image}
              alt={col.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="font-display text-lg md:text-xl font-semibold text-primary-foreground">
                {col.name}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
