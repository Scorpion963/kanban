"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";


export function AddNewTaskButton({
  form_modal,
}: {
  form_modal: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-indigo-500 p-3 px-6 font-bold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-300"
      >
        +Add New Task
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 top-1/2 z-10 h-screen w-full -translate-x-1/2 -translate-y-1/2"
          >
            <div
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 border border-black bg-black opacity-50"
            ></div>
            <div className="absolute left-1/2 top-1/2 min-h-[45%] w-[19%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6">
              {form_modal}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
