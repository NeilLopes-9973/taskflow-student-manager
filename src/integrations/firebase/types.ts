import { User } from 'firebase/auth';
import { DocumentData, Timestamp } from 'firebase/firestore';

export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  deadline: string;
  status: 'pending' | 'completed';
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export type TaskFilter = 'all' | 'completed' | 'pending';

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

export interface TaskContextType {
  tasks: Task[];
  allTasks: Task[];
  filter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;
  addTask: (task: Pick<Task, 'title' | 'description' | 'deadline' | 'status'>) => Promise<void>;
  updateTask: (id: string, updates: Partial<Pick<Task, 'title' | 'description' | 'deadline' | 'status'>>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  toggleStatus: (id: string) => Promise<void>;
  getTaskById: (id: string) => Task | undefined;
  taskCounts: {
    all: number;
    completed: number;
    pending: number;
  };
  isLoading: boolean;
}
