import React from 'react';
import { motion } from 'framer-motion';

export default function PrettySeparator({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 max-w-5xl mx-auto ${className}`}>
      <motion.span
        className="h-px bg-line flex-1"
        initial={{ scaleX: 0, opacity: 0.4 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: 'right' }}
      />
      <motion.span
        className="h-2 w-2 rounded-full bg-brand"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 180, damping: 16, delay: 0.05 }}
      />
      <motion.span
        className="h-px bg-line flex-1"
        initial={{ scaleX: 0, opacity: 0.4 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  );
}
