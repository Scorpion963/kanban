"use client";
import { AnimatePresence } from "framer-motion";
import { LayoutDashboard } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function CreateNewBoard({
  create_new_board_form,
}: {
  create_new_board_form: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="flex w-full gap-3 rounded-r-full bg-white p-2 py-4 pl-6 text-lg font-medium text-indigo-500 hover:bg-indigo-100"
      >
        <LayoutDashboard />
        <span>+ Create New Board</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <CreateNewBoardModal setIsOpen={setIsOpen}>
            {create_new_board_form}
          </CreateNewBoardModal>
        )}
      </AnimatePresence>
    </>
  );
}

function CreateNewBoardModal({
  setIsOpen,
  children,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute bottom-0 z-10 h-screen w-screen"
    >
      <div
        onClick={() => setIsOpen(false)}
        className="absolute bottom-0 h-screen w-screen bg-black opacity-50"
      ></div>
      <div className="absolute left-1/2 top-1/2 size-24 h-auto w-[19%] -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-lg bg-white p-6">
        {children}
        <div className="flex justify-between gap-6">
          <button className="w-1/2 rounded-full bg-indigo-500 p-3 px-6 font-bold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-300">
            Add
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="w-1/2 rounded-full bg-indigo-500 p-3 px-6 font-bold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );
}
