"use client";

import { EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function VerticalElipsisButton() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={modalRef} className="relative">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <EllipsisVertical />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-1 top-12 z-20 bg-white rounded-lg"
          >
            <div id="modal" className="flex w-36 flex-col rounded-md shadow-lg">
              <button className="w-full p-3 py-2 text-start text-sm text-slate-400 transition-colors duration-500 ease-in-out hover:bg-slate-100">
                Edit Board
              </button>
              <button className="w-full p-3 py-2 text-start text-sm text-red-500 transition-colors duration-500 ease-in-out hover:bg-slate-100">
                Delete Board
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
