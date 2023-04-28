import { Schema, model } from 'mongoose';
import { Task } from '../interfaces/Task';

const TaskSchema = new Schema<Task>(
  {
    title: { type: String, required: true },
    projectId: { type: Schema.Types.ObjectId, required: true, ref: 'Project' },
  },
  { timestamps: true }
);

const TaskModel = model('Task', TaskSchema);
export default TaskModel;
