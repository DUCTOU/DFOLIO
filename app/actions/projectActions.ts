"use server";

import { connectToDatabase } from "@/lib/mongodb";
import { Project } from "@/lib/models/Project";
import { revalidatePath } from "next/cache";

export async function getProjects() {
  await connectToDatabase();
  const projects = await Project.find().sort({ order: 1, _id: -1 }).lean();
  return JSON.parse(JSON.stringify(projects));
}

export async function createProject(formData: FormData) {
  await connectToDatabase();
  const title = formData.get("title");
  const description = formData.get("description");
  const techStack = formData.get("techStack")?.toString().split(",").map(t => t.trim()).filter(t => t) || [];
  const imageURL = formData.get("imageURL");
  const liveLink = formData.get("liveLink");

  await Project.create({ title, description, techStack, imageURL, liveLink });
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
}

export async function deleteProject(id: string) {
  await connectToDatabase();
  await Project.findByIdAndDelete(id);
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
}

export async function updateProject(id: string, formData: FormData) {
  await connectToDatabase();
  const title = formData.get("title");
  const description = formData.get("description");
  const techStack = formData.get("techStack")?.toString().split(",").map(t => t.trim()).filter(t => t) || [];
  const imageURL = formData.get("imageURL");
  const liveLink = formData.get("liveLink");

  await Project.findByIdAndUpdate(id, { title, description, techStack, imageURL, liveLink });
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
}

export async function updateProjectsOrder(updates: { id: string; order: number }[]) {
  await connectToDatabase();
  const bulkOps = updates.map((update) => ({
    updateOne: {
      filter: { _id: update.id },
      update: { $set: { order: update.order } },
    },
  }));
  await Project.bulkWrite(bulkOps);
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
}
