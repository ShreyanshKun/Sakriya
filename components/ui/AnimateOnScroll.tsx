// src/components/ui/AnimateOnScroll.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimateOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
