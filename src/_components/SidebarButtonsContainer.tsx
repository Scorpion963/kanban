import { CreateNewBoard } from "./CreateNewBoard";
import { CreateNewBoardsForm } from "./CreateNewBoardForm";
import { SidebarButton } from "./SidebarButton";

export async function SidebarButtonsConainer () {
    return <>
        <SidebarButton name="fjwioaefa" id="fiwjae;efowaij" />
        <CreateNewBoard create_new_board_form={<CreateNewBoardsForm />} />
    </>
}

