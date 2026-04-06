"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-h-screen bg-black"
    >
      {children}
    </motion.div>
  );
}
