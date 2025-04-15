"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

export default function ToogleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}

      className="flex mt-2 mr-4 justify-end"
    >
      <Button
        className="focus:outline-none"
        onClick={() => setTheme(isDark() ? "light" : "dark")}
        variant="outline"
        aria-label="Toggle dark mode"
      >
        {isDark() ? <SunIcon /> : <MoonIcon />}
      </Button>
    </motion.div>
  );
}
