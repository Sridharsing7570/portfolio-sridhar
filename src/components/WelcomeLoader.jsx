"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Slot } from "@radix-ui/react-slot";

const welcomeMessages = [
  "Welcome!",
  "ପ୍ରଣାମ!", // Odia "Pranam"
  "こんにちは!",
  "नमस्ते!",
  "Hola!",
  "Bonjour!",
];

export function WelcomeLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(welcomeMessages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
      setCurrentMessage(welcomeMessages[randomIndex]);
    }, 150);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative h-screen w-full">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
          >
            <motion.h1
              key={currentMessage}
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 5 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 15,
              }}
              className="text-4xl font-bold tracking-tighter text-blue-600 sm:text-5xl md:text-6xl lg:text-7xl dark:text-blue-400"
            >
              {currentMessage}
            </motion.h1>
          </motion.div>
        ) : (
          <Slot>{children}</Slot>
        )}
      </AnimatePresence>
    </div>
  );
}
