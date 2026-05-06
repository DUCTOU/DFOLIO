import mongoose, { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [{ type: String }],
  imageURL: { type: String },
  liveLink: { type: String },
  order: { type: Number, default: 0 },
});

export const Project = models.Project || model('Project', ProjectSchema);
