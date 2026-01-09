import { Task } from '@/integrations/firebase/types';
import TaskCard from './TaskCard';
import { ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (id: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

const TaskList = ({ tasks, onToggleStatus, onDelete }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
          <ClipboardList className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">No tasks yet</h3>
        <p className="mb-6 max-w-sm text-sm text-muted-foreground">
          Get started by creating your first task. Stay organized and on top of your studies!
        </p>
        <Link to="/add">
          <Button className="gradient-primary">Create Your First Task</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
          index={index}
        />
      ))}
    </div>
  );
};

export default TaskList;
