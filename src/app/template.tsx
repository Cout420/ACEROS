'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
      className="overflow-x-hidden"
    >
      {children}
    </motion.main>
  );
}
