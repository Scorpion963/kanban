"use client";
import { AnimatePresence } from "framer-motion";
import { LayoutDashboard } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { addBoard } from "~/_actions/action";

export function CreateNewBoard() {
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
        {isOpen && <CreateNewBoardModal setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
}

function CreateNewBoardModal({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [error, setError] = useState<string | null>(null);
  const [boardName, setBoardName] = useState<string>("");

  const handleddBoard = async () => {
    const response = await addBoard(boardName);
    if (response) {
      setError(response.message);
      return
    }
    setIsOpen(false)
    setError(null);
  };

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
        <h3 className="text-xl font-semibold">Add New Board</h3>
        <div className="flex flex-col space-y-4">
          <label className="text-sm font-medium" htmlFor="name">
            Name
          </label>
          <div className="flex flex-col gap-2">
            <input
              onChange={(e) => setBoardName(e.target.value)}
              value={boardName}
              type="text"
              className="rounded-lg border border-slate-200 bg-transparent px-4 py-2 text-sm outline-none transition-colors duration-500 focus:border-indigo-500"
              placeholder="e.g. Web Design"
            />
            <div className="px-1 text-sm text-red-500">{error && error}</div>
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <button
            onClick={() => handleddBoard()}
            className="w-1/2 rounded-full bg-indigo-500 p-3 px-6 font-bold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-300"
          >
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
