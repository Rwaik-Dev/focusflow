"use client";

import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          O que dizem sobre o FocusFlow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Profissionais e estudantes estão focando como nunca com nossa
          plataforma.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-2xl shadow-sm border flex flex-col items-center text-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-full mb-4"
              />
              <p className="text-sm text-muted-foreground mb-2 italic">
                “{item.quote}”
              </p>
              <div className="font-medium text-sm">{item.name}</div>
              <div className="text-xs text-muted-foreground">{item.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
