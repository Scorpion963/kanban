"use client"
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function SidebarButton({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const buttonPath = `/${name}/${id}`
  const path = usePathname()

  return (
    <Link
      className={`rounded-r-full transition-colors duration-500 ${buttonPath === path ? "bg-indigo-500 text-white" : "bg-white text-indigo-500 hover:bg-indigo-100"} p-2 py-4 pl-6 font-medium  flex gap-3 text-lg`}
      href={buttonPath}
    >
      <LayoutDashboard />
      <span>{name}</span>
    </Link>
  );
}
