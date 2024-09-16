"use client";

import { EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { deleteBoard, updateBoard } from "~/_actions/action";

export function VerticalElipsisButton() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const [errors, setErrors] = useState<{
    deleteButtonMessage?: string | null;
    deleteActionMessage?: string | null;
  }>();
  const [updatedName, setUpdatedName] = useState<string>("");
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const cleanPath = () => {
    const cleanedPath = path.startsWith("/") ? path.slice(1) : path;
    if (cleanedPath.trim().length < 2) {
      setErrors({ deleteButtonMessage: "no board seleceted" });
      return [];
    }
    const [name, id] = cleanedPath.split("/");
    if (!name || !id) return [];
    return [name, id];
  };

  const handleDelete = async () => {
    const [name, id] = cleanPath();
    if (!name || !id) return;
    const response = await deleteBoard(name, id);
    if (response)
      console.log(setErrors({ deleteActionMessage: response.error }));
  };

  const handleUpdate = async () => {
    const [name, id] = cleanPath();
    if (!name || !id) return;
    if (updatedName.trim().length < 1) return;
    await updateBoard(updatedName, name, id);
  };

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
    <div ref={modalRef} className="">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <EllipsisVertical />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-1 top-12 z-20 rounded-lg bg-white"
          >
            <div id="modal" className="flex w-36 flex-col rounded-md shadow-lg">
              <button
                onClick={() => {
                  setIsUpdateModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full p-3 py-2 text-start text-sm text-slate-400 transition-colors duration-500 ease-in-out hover:bg-slate-100"
              >
                Edit Board
              </button>
              <button
                onClick={() => handleDelete()}
                className="w-full p-3 py-2 text-start text-sm text-red-500 transition-colors duration-500 ease-in-out hover:bg-slate-100"
              >
                Delete Board
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isUpdateModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-0 left-0 z-10 h-screen w-screen"
          >
            <div
              onClick={() => setIsUpdateModalOpen(false)}
              className="absolute bottom-0 h-screen w-screen bg-black opacity-50"
            ></div>
            <div className="absolute left-1/2 top-1/2 size-24 h-auto w-[19%] -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-lg bg-white p-6">
              <h3 className="text-xl font-semibold">Edit Board</h3>
              <div className="flex flex-col space-y-4">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <div className="flex flex-col gap-2">
                  <input
                    onChange={(e) => setUpdatedName(e.target.value)}
                    value={updatedName}
                    type="text"
                    className="rounded-lg border border-slate-200 bg-transparent px-4 py-2 text-sm outline-none transition-colors duration-500 focus:border-indigo-500"
                    placeholder="e.g. Web Design"
                  />
                  <div className="px-1 text-sm text-red-500"></div>
                </div>
              </div>
              <div className="flex justify-between gap-6">
                <button
                  onClick={() => handleUpdate()}
                  className="w-1/2 rounded-full bg-indigo-500 p-3 px-6 font-bold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-300"
                >
                  Add
                </button>
                <button
                  onClick={() => setIsUpdateModalOpen(false)}
                  className="w-1/2 rounded-full bg-indigo-500 p-3 px-6 font-bold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
