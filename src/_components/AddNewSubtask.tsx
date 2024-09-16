"use client";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

type SubtasksProps = {
  name: string;
  id: string;
};

export function AddNewSubtask() {
  const [subtasks, setSubtasks] = useState<SubtasksProps[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleAddSubtask = () => {
    setSubtasks((prev) => [...prev, { id: uuidv4(), name: "" }]);
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({behavior: "smooth"})
    }
  };

  const handleRemoveSubtask = (id: string) => {
    const newSubtasks = subtasks.filter((item) => item.id !== id);
    setSubtasks(newSubtasks);
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="max-h-36 overflow-y-scroll scrollbar-none">
        <AnimatePresence>
          {subtasks.length > 0 ? (
            <>
              <ul className="space-y-3">
                {subtasks.map((item) => (
                  <Subtask
                    key={item.id}
                    id={item.id}
                    handleRemoveSubtask={handleRemoveSubtask}
                  />
                ))}
              </ul>
              <div ref={bottomRef}></div>
            </>
          ) : (
            <p className="text-small w-full text-center text-slate-400">
              No subtasks added
            </p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={handleAddSubtask}
        className="w-full rounded-full bg-indigo-100 p-2 px-6 font-bold text-indigo-500 transition-colors duration-500 ease-in-out hover:bg-indigo-200"
      >
        +Add New Task
      </button>
    </div>
  );
}

function Subtask({
  id,
  handleRemoveSubtask,
}: {
  id: string;
  handleRemoveSubtask: (id: string) => void;
}) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-3"
      key={id}
    >
      <input
        className="w-full rounded-lg border border-slate-200 bg-transparent px-4 py-2 text-sm outline-none transition-colors duration-500 focus:border-indigo-500"
        type="text"
      />
      <X
        className="cursor-pointer text-slate-500"
        onClick={() => handleRemoveSubtask(id)}
      />
    </motion.li>
  );
}
