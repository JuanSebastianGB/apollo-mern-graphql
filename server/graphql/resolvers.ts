import { Project } from '../src/interfaces/Project';
import projectModel from '../src/models/Project';
import TaskModel from '../src/models/Task';

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    projects: async () => await projectModel.find(),
    project: async (root: any, { _id }: { _id: string }) =>
      await projectModel.findById(_id),

    tasks: async () => await TaskModel.find(),
    task: async (root: any, { _id }: { _id: string }) =>
      await TaskModel.findById(_id),
  },

  Mutation: {
    createProject: async (root: any, { name, description }: Project) => {
      const project = await projectModel.create({ name, description });
      return project;
    },
    deleteProject: async (root: any, _id: string) => {
      const project = await projectModel.findByIdAndDelete(_id);
      return project;
    },
    createTask: async (root: any, { title, projectId }: any) => {
      const project = await projectModel.findById(projectId);
      if (!project) throw new Error('Project not found');
      const task = await TaskModel.create({ title, projectId });
      return task;
    },
  },
};
