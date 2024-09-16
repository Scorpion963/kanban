export async function CreateNewBoardsForm() {
  return (
    <>
      <h3 className="text-xl font-semibold">Add New Board</h3>
      <div className="flex flex-col space-y-4">
        <label className="text-sm font-medium" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="rounded-lg border border-slate-200 bg-transparent px-4 py-2 text-sm outline-none transition-colors duration-500 focus:border-indigo-500"
          placeholder="e.g. Web Design"
        />
      </div>
    </>
  );
}
