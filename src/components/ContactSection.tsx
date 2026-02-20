import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";

export const ContactSection = () => {
  const [phone, setPhone] = useState("");

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <Phone className="w-10 h-10 mx-auto mb-4 text-accent" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Перезвоним вам
          </h2>
          <p className="text-primary-foreground/70 mb-8">
            Оставьте номер телефона и наш специалист свяжется с вами в ближайшее время
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 __ ___ __ __"
              className="flex-1 px-4 py-3 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-accent-foreground font-semibold text-sm uppercase tracking-wider rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Отправить
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
