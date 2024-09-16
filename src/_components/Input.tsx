export async function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-slate-200 bg-transparent px-4 py-2 text-sm outline-none transition-colors duration-500 focus:border-indigo-500"
    />
  );
}
