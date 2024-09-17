"use client";
import React, { useState } from "react";
import { Eye, EyeOff, MoonStar, Sun } from "lucide-react";
import { Toggle } from "./Toggle";
import { AnimatePresence, motion } from "framer-motion";

export function Header({
  main_header,
  sidebar_buttons,
  logo,
}: {
  main_header: React.ReactNode;
  sidebar_buttons: React.ReactNode;
  logo: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen">
      <motion.div
        transition={{ ease: "easeInOut" }}
        layout
        className={`flex ${isOpen && "justify-between"} border-1 h-[7.5%] border-b border-slate-300 bg-white`}
      >
        <div className="flex h-24 bg-white px-6">{logo}</div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="transition-color absolute bottom-6 rounded-r-full bg-indigo-500 p-4 py-4 pl-6 duration-500 hover:bg-indigo-400"
        >
          <Eye className="text-white" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: -600 }}
              animate={{ x: 0 }}
              exit={{ x: -600 }}
              transition={{ ease: "easeInOut" }}
              className="fixed w-1/6 bg-black"
            >
              <div className="flex h-screen flex-col justify-between border-r border-slate-300 bg-white pb-6">
                <div>
                  <div className="border-1 flex h-24 px-6">{logo}</div>
                  <p className="px-6 text-sm font-medium uppercase tracking-wider text-slate-500">
                    all boards (4)
                  </p>
                  <div className="pr-6 pt-6">{sidebar_buttons}</div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="px-6">
                    <div className="flex w-full items-center justify-center gap-3 bg-slate-100 py-4">
                      <Sun />
                      <Toggle />
                      <MoonStar />
                    </div>
                  </div>

                  <div className="flex w-full pr-6">
                    <button
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="group flex w-full gap-3 rounded-r-full p-2 py-4 pl-6 transition-colors duration-500 hover:bg-indigo-100"
                    >
                      <EyeOff className="text-slate-500 group-hover:text-indigo-500" />
                      <div className="font-medium text-slate-500 group-hover:text-indigo-500">
                        Hide Sidebar
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          layout
          className={`border-l border-slate-300 ${isOpen ? "w-5/6" : "w-full"}`}
        >
          {main_header}
        </motion.div>
      </motion.div>
      <motion.div
        transition={{ ease: "easeInOut" }}
        layout
        className={`flex ${isOpen && "justify-between"} h-[92.5%] bg-slate-200`}
      >
        <div className="flex h-24 bg-white"></div>
        <motion.div
          layout
          className={`h-full ${isOpen ? "w-5/6" : "w-full"}`}
        ></motion.div>
      </motion.div>
    </div>
  );
}
