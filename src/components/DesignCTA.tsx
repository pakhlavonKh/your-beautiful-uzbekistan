import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import designImg from "@/assets/design-projects.jpg";

export const DesignCTA = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden"
        >
          <img src={designImg} alt="Дизайн проекты" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Дизайн-проекты типовых квартир
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Мы предлагаем интересные готовые решения для ваших квартир. 
            Загрузите рисунок комнаты от руки и получите бесплатный 3D-проект от дизайнера!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded"
            >
              Готовые решения
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-secondary transition-colors rounded"
            >
              Отправить рисунок
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
