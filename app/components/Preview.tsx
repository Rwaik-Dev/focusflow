"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Preview() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Uma prévia do FocusFlow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Simples, funcional e com foco no que importa. Veja como a interface do
          app foi pensada para você produzir mais.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl border max-w-4xl mx-auto"
        >
          <Image
            src="/FocusFlow-homepage.png"
            alt="Prévia do app FocusFlow"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
