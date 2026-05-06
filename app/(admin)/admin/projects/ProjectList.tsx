"use client";

import { useState, useEffect } from "react";
import { deleteProject, updateProject, updateProjectsOrder } from "@/app/actions/projectActions";
import { Trash2, Edit2, X, Check, GripVertical } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableProjectItem({ project, editingId, setEditingId }: { project: any, editingId: string | null, setEditingId: (id: string | null) => void }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: project._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="border border-[#e0e0e0] p-4 rounded-lg flex flex-col gap-4 bg-white">
      {editingId === project._id ? (
        <form 
          action={async (formData) => {
            await updateProject(project._id, formData);
            setEditingId(null);
          }}
          className="flex flex-col gap-3"
        >
          <input type="text" name="title" defaultValue={project.title} required className="w-full p-2 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="Title" />
          <textarea name="description" defaultValue={project.description} required rows={3} className="w-full p-2 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="Description"></textarea>
          <input type="text" name="techStack" defaultValue={project.techStack?.join(", ")} className="w-full p-2 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="Tech Stack (comma separated)" />
          <input type="url" name="imageURL" defaultValue={project.imageURL} className="w-full p-2 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="Image URL" />
          <input type="url" name="liveLink" defaultValue={project.liveLink} className="w-full p-2 border border-[#e0e0e0] rounded bg-white text-[13px] outline-none focus:border-[#4a9b8e]" placeholder="Live Link" />
          
          <div className="flex gap-2 justify-end mt-2">
            <button type="button" onClick={() => setEditingId(null)} className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[#6b6b6b] hover:bg-[#f5f5f5] rounded transition-colors">
              <X className="w-3.5 h-3.5" /> Cancel
            </button>
            <button type="submit" className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium bg-[#4a9b8e] text-white hover:bg-[#3d8276] rounded transition-colors">
              <Check className="w-3.5 h-3.5" /> Save Changes
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-between items-start gap-4">
          <div className="flex gap-3">
            <div {...attributes} {...listeners} className="cursor-grab text-[#a0a0a0] hover:text-[#1a1a1a] transition-colors mt-1">
              <GripVertical className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[15px] text-[#1a1a1a]">{project.title}</h4>
              <p className="text-[13px] text-[#6b6b6b] mt-1 line-clamp-2">{project.description}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setEditingId(project._id)} className="text-blue-500 hover:text-blue-700 p-2 bg-blue-50 rounded transition-colors" title="Edit Project">
              <Edit2 className="w-4 h-4" />
            </button>
            <form action={deleteProject.bind(null, project._id)}>
              <button type="submit" className="text-red-500 hover:text-red-700 p-2 bg-red-50 rounded transition-colors" title="Delete Project">
                <Trash2 className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectList({ projects: initialProjects }: { projects: any[] }) {
  const [projects, setProjects] = useState(initialProjects);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    setProjects(initialProjects);
  }, [initialProjects]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setProjects((items) => {
        const oldIndex = items.findIndex(item => item._id === active.id);
        const newIndex = items.findIndex(item => item._id === over?.id);
        
        const newItems = arrayMove(items, oldIndex, newIndex);
        
        // Save the new order
        const updates = newItems.map((item, index) => ({
          id: item._id,
          order: index,
        }));
        
        // Fire and forget updating in background
        updateProjectsOrder(updates);

        return newItems;
      });
    }
  };

  if (projects.length === 0) {
    return <p className="text-[13px] text-[#6b6b6b]">No projects found.</p>;
  }

  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext 
        items={projects.map(p => p._id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <SortableProjectItem 
              key={project._id} 
              project={project} 
              editingId={editingId}
              setEditingId={setEditingId}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
