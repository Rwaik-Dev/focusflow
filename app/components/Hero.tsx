"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold tracking-tight sm:text-6xl"
      >
        Foco absoluto com o <span className="text-blue-600">FocusFlow</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl"
      >
        Aumente sua produtividade com a técnica Pomodoro, controle de tarefas e
        bloqueio de distrações — tudo em um só lugar.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8"
      >
        <Button size={"lg"}>Comece agora</Button>
      </motion.div>
    </section>
  );
}
