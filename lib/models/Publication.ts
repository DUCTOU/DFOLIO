import mongoose, { Schema, model, models } from 'mongoose';

const PublicationSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String },
  date: { type: Date },
  publisher: { type: String },
});

export const Publication = models.Publication || model('Publication', PublicationSchema);
