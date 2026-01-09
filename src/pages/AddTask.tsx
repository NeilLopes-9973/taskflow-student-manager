import { useTaskContext } from '@/context/TaskContext';
import TaskForm from '@/components/TaskForm';
import { Plus } from 'lucide-react';

const AddTask = () => {
  const { addTask } = useTaskContext();

  return (
    <div className="mx-auto max-w-2xl animate-fade-in">
      <div className="mb-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-lg">
          <Plus className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Create New Task
        </h1>
        <p className="mt-1 text-muted-foreground">
          Add a new task to your study schedule
        </p>
      </div>

      <div className="rounded-2xl bg-card p-6 shadow-lg sm:p-8">
        <TaskForm mode="add" onSubmit={addTask} />
      </div>
    </div>
  );
};

export default AddTask;
