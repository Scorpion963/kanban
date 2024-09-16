import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export async function SidebarButton({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  return (
    <Link
      className="rounded-r-full bg-indigo-500 p-2 py-4 pl-6 font-medium text-white flex gap-3 text-lg"
      href={`${id}`}
    >
      <LayoutDashboard />
      <span>{name}</span>
    </Link>
  );
}
