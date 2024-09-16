"use client";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {motion} from 'framer-motion'

type StatusType = {
  text: string;
  color: string;
};

export function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<StatusType>();
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-transparent px-4 py-2 text-start text-sm outline-none transition-colors duration-500 focus:border-indigo-500"
      >
        {status ? (
          <li className="flex cursor-pointer items-center gap-1 transition-colors duration-500 hover:bg-slate-100">
            <div className={`size-3 rounded-full bg-${status.color}-500`}></div>
            {status.text}
          </li>
        ) : (
          <div>Select a Status</div>
        )}
        <ChevronDown
          className={`transition ${isOpen && "rotate-180"} duration-100`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute w-full rounded-lg bg-white"
          >
            <SelectElement
              setIsOpen={setIsOpen}
              setStatus={setStatus}
              color="pink"
              text="Todo"
            />
            <SelectElement
              setIsOpen={setIsOpen}
              setStatus={setStatus}
              color="pink"
              text="Doing"
            />
            <SelectElement
              setIsOpen={setIsOpen}
              setStatus={setStatus}
              color="pink"
              text="Done"
            />
            <SelectElement
              setIsOpen={setIsOpen}
              setStatus={setStatus}
              color="pink"
              text="Todo"
            />
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

const SelectElement = ({
  color,
  text,
  setStatus,
  setIsOpen,
}: {
  color: string;
  text: string;
  setStatus: React.Dispatch<React.SetStateAction<StatusType | undefined>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <li
      onClick={() => {
        setIsOpen(false);
        setStatus({ color: color, text: text });
      }}
      className="flex cursor-pointer items-center gap-1 px-4 py-2 transition-colors duration-500 hover:bg-slate-100"
    >
      <div className={`size-3 rounded-full bg-${color}-500`}></div>
      {text}
    </li>
  );
};
