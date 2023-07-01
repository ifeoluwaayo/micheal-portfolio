"use client";
import { AnimatePresence } from "framer-motion";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="bg-white text-black">
      <AnimatePresence mode="wait" initial={true}>
        {children}
      </AnimatePresence>
    </body>
  );
}
