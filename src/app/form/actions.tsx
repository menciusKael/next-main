"use server";

import { revalidatePath } from "next/cache";

const sleep = (ms: number | undefined) => new Promise((r) => setTimeout(r, ms));

let data = ["阅读", "写作", "冥想"];

export async function findToDos() {
  return data;
}

export async function createToDo(
  prevState: any,
  formData: { get: (arg0: string) => any }
) {
  await sleep(500);
  const todo = formData.get("todo");
  data.push(todo);
  revalidatePath("/form");
  return {
    message: `add ${todo} success!`,
  };
}
