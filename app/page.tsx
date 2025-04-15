import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Preview from "./components/Preview";
import Testimonials from "./components/Testimonials";

export default function page() {
  return (
    <main>
      <Hero />
      <Features />
      <Preview />
      <Testimonials />
    </main>
  );
}
