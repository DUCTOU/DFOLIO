"use server";

import { connectToDatabase } from "@/lib/mongodb";
import { Publication } from "@/lib/models/Publication";
import { revalidatePath } from "next/cache";

export async function getPublications() {
  await connectToDatabase();
  const publications = await Publication.find().sort({ date: -1 }).lean();
  return JSON.parse(JSON.stringify(publications));
}

export async function createPublication(formData: FormData) {
  await connectToDatabase();
  const title = formData.get("title");
  const description = formData.get("description");
  const url = formData.get("url");
  const date = formData.get("date");
  const publisher = formData.get("publisher");

  await Publication.create({ 
    title, 
    description, 
    url, 
    date: date ? new Date(date as string) : undefined,
    publisher 
  });
  revalidatePath("/admin/publications");
  revalidatePath("/publications");
}

export async function deletePublication(id: string) {
  await connectToDatabase();
  await Publication.findByIdAndDelete(id);
  revalidatePath("/admin/publications");
  revalidatePath("/publications");
}
