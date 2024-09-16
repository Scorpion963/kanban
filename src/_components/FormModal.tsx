import { AddNewSubtask } from "./AddNewSubtask";
import { Input } from "./Input";
import { InputLabel } from "./InputLabel";
import { Select } from "./Select";

export async function FormModal() {
  return (
    <form className="space-y-3" action="">
      <h1 className="text-xl font-semibold capitalize">add new task</h1>
      <div className="space-y-2">
        <InputLabel htmlFor="title">Title</InputLabel>
        <Input type="text" id="title" placeholder="Task Title" />
      </div>
      <div className="space-y-2">
        <InputLabel htmlFor="description">Description</InputLabel>
        <textarea
          name="description"
          id="description"
          className="h-32 w-full resize-none rounded-lg border border-slate-200 bg-transparent px-4 py-2 text-sm outline-none transition-colors duration-500 scrollbar focus:border-indigo-500"
          placeholder="Task Description "
        ></textarea>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Subtasks</h3>
        <AddNewSubtask />
      </div>
      
      <div className="space-y-2">
        <div className="text-sm font-medium">Status</div>
        <Select />
      </div>

      <button
        className="w-full rounded-full bg-indigo-500 p-2 px-6 font-bold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-200"
      >
        Add
      </button>
    </form>
  );
}
