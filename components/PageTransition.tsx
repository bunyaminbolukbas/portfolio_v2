"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

// Eerste load (en dus ook de server-render) blijft statisch zichtbaar:
// zonder JavaScript mag de pagina nooit op opacity:0 staan. Pas bij
// client-side navigaties — als JS aantoonbaar draait — animeert de wissel.
let hasHydrated = false;

export function PageTransition({ children }: PageTransitionProps) {
  const reduceMotion = useReducedMotion();
  const [animate] = useState(() => hasHydrated);

  useEffect(() => {
    hasHydrated = true;
  }, []);

  if (!animate || reduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
