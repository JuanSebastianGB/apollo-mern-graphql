import { Schema, model } from 'mongoose';
import { Project } from '../interfaces/Project';

const ProjectSchema = new Schema<Project>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const projectModel = model('Project', ProjectSchema);

export default projectModel;
