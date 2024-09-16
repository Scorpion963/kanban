"use client";

export function Toggle() {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input type="checkbox" value="" className="peer sr-only" />
      <div className="peer-checked:bg-ind peer relative h-6 w-11 rounded-full bg-indigo-500 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full"></div>
    </label>
  );
}
