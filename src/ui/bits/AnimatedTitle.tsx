"use client";
import { motion } from "framer-motion";

const AnimatedTitle = (title: any) => {
  const letters = Array.from(title.title);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        delayChildren: 0.2 * i,
        staggerChildren: 0.1,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.h1
      className="md:text-3xl text-2xl font-semibold font-header ml-2 block"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => {
        return (
          <motion.span key={index} variants={child}>
            {letter as string}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

export default AnimatedTitle;
