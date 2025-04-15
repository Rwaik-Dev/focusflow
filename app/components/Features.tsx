"use client";

import { features } from "@/lib/data";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Recursos que impulsionam seu foco
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-10 mas-w-xl mx-auto"
        >
          O FocusFlow combina as melhores técnicas de produtividade com dados
          que realmente ajudam.
        </motion.p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-2xl shadow-sm border flex items-start gap-4"
              >
                <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
