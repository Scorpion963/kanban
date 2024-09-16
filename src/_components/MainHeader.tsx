import { AddNewTaskButton } from "./AddNewTaskButton";
import { FormModal } from "./FormModal";
import { VerticalElipsisButton } from "./VerticalElipsisButton";


export async function MainHeader() {
  return (
    <div className="px-6 flex items-center justify-between w-full h-24 bg-white">
      <h1 className="text-2xl font-medium">Platform Launch</h1>
      <div className="flex items-center gap-3">
        <AddNewTaskButton form_modal={<FormModal />} />
        <VerticalElipsisButton />
      </div>
    </div>
  );
}
