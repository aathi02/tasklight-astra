
// Define common types for the application

export type Priority = 'high' | 'medium' | 'low';
export type Status = 'pending' | 'in-progress' | 'completed';

export interface Assignee {
  name: string;
  avatar?: string;
  initials: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  status: Status;
  progress: number;
  assignee: Assignee;
}
