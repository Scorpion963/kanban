"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "~/server/db";

export async function addBoard(name: string) {
  if (!name.length) return { message: "The input field cannot be empty" };
  const user = await db.board.create({ data: { name: name } });
  revalidatePath("/");
  redirect(`/${name}/${user.id}`);
}

export async function deleteBoard(name: string, id: string) {
  const response = await db.board.delete({ where: { id: id, name: name } });

  if (!response) return { error: "the object could not be found" };
  redirect("/");
}

export async function updateBoard(
  updatedName: string,
  name: string,
  id: string,
) {
  const response = await db.board.update({
    where: { id: id, name: name },
    data: { name: updatedName },
  });
  revalidatePath("/");
  redirect(`/${updatedName}/${response.id}`);
}
