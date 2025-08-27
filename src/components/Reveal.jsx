import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reveal
 * - Default: fades & moves content up on scroll.
 * - If `stagger > 0`, it will animate each *direct child* with a stagger.
 */
export default function Reveal({
  children,
  delay = 0,
  amount = 0.3,
  y = 18,
  duration = 0.5,
  stagger = 0, // e.g., 0.06 for staggered child animations
}) {
  if (stagger > 0 && React.Children.count(children) > 1) {
    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
      >
        {React.Children.map(children, (child) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y },
              show: { opacity: 1, y: 0, transition: { duration } },
            }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
