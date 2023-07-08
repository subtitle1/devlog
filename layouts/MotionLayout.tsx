import { ReactNode } from "react";
import { motion } from "framer-motion"

interface MotionProps {
    children: ReactNode
}

export default function MotionLayout({ children } : MotionProps) {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
        {children}
    </motion.article>
  );
}