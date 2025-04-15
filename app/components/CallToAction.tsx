'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-24 px-6 bg-blue-50 dark:bg-blue-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900 dark:text-white">
          Pronto para focar de verdade?
        </h2>
        <p className="text-muted-foreground mb-8">
          Experimente o FocusFlow e transforme sua produtividade com uma abordagem simples e eficaz.
        </p>
        <Button size="lg" className="text-base">
          Comece agora
        </Button>
      </motion.div>
    </section>
  )
}
