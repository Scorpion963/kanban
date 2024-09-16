import { db } from "~/server/db";
import { CreateNewBoard } from "./CreateNewBoard";
import { SidebarButton } from "./SidebarButton";

export async function SidebarButtonsConainer() {
  const boards = await db.board.findMany();
  return (
    <>
      {boards.map((item) => (
        <SidebarButton key={item.id} name={item.name} id={item.id} />
      ))}

      <CreateNewBoard />
    </>
  );
}
