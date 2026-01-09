import { useParams, Navigate } from 'react-router-dom';
import { useTaskContext } from '@/context/TaskContext';
import TaskForm from '@/components/TaskForm';
import { Pencil, Loader2 } from 'lucide-react';

const EditTask = () => {
  const { id } = useParams<{ id: string }>();
  const { getTaskById, updateTask, isLoading } = useTaskContext();

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const task = id ? getTaskById(id) : undefined;

  if (!task) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (data: Parameters<typeof updateTask>[1]) => {
    await updateTask(task.id, data);
  };

  return (
    <div className="mx-auto max-w-2xl animate-fade-in">
      <div className="mb-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-lg">
          <Pencil className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Edit Task
        </h1>
        <p className="mt-1 text-muted-foreground">
          Update your task details below
        </p>
      </div>

      <div className="rounded-2xl bg-card p-6 shadow-lg sm:p-8">
        <TaskForm mode="edit" initialData={task} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default EditTask;
