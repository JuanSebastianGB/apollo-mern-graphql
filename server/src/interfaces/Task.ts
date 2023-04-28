import { SchemaDefinitionProperty } from 'mongoose';

export interface Task {
  title: string;
  projectId: SchemaDefinitionProperty<string>;
}
