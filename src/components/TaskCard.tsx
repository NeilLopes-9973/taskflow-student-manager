import { Task } from '@/integrations/firebase/types';
import { Calendar, Clock, Check, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format, isPast, isToday } from 'date-fns';
import { Link } from 'react-router-dom';

interface TaskCardProps {
  task: Task;
  onToggleStatus: (id: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  index: number;
}

const TaskCard = ({ task, onToggleStatus, onDelete, index }: TaskCardProps) => {
  const deadlineDate = new Date(task.deadline);
  const isOverdue = isPast(deadlineDate) && task.status === 'pending' && !isToday(deadlineDate);
  const isDueToday = isToday(deadlineDate);

  return (
    <div 
      className="task-card animate-slide-up group"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1 space-y-2">
          <div className="flex items-start gap-3">
            <button
              onClick={() => onToggleStatus(task.id)}
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                task.status === 'completed'
                  ? 'border-success bg-success text-success-foreground'
                  : 'border-muted-foreground/30 hover:border-primary'
              }`}
              aria-label={task.status === 'completed' ? 'Mark as pending' : 'Mark as completed'}
            >
              {task.status === 'completed' && <Check className="h-3 w-3" />}
            </button>
            
            <div className="flex-1">
              <h3 className={`font-semibold text-foreground transition-colors ${
                task.status === 'completed' ? 'line-through opacity-60' : ''
              }`}>
                {task.title}
              </h3>
              <p className={`mt-1 text-sm text-muted-foreground line-clamp-2 ${
                task.status === 'completed' ? 'opacity-50' : ''
              }`}>
                {task.description}
              </p>
            </div>
          </div>

          <div className="ml-8 flex flex-wrap items-center gap-3">
            <div className={`flex items-center gap-1.5 text-xs ${
              isOverdue 
                ? 'text-destructive' 
                : isDueToday 
                  ? 'text-warning' 
                  : 'text-muted-foreground'
            }`}>
              <Calendar className="h-3.5 w-3.5" />
              <span>
                {isOverdue ? 'Overdue: ' : isDueToday ? 'Due today: ' : ''}
                {format(deadlineDate, 'MMM d, yyyy')}
              </span>
            </div>
            
            <span className={`status-badge ${
              task.status === 'completed' ? 'status-completed' : 'status-pending'
            }`}>
              <Clock className="h-3 w-3" />
              {task.status === 'completed' ? 'Completed' : 'Pending'}
            </span>
          </div>
        </div>

        <div className="ml-8 flex items-center gap-2 sm:ml-0 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
          <Link to={`/edit/${task.id}`}>
            <Button variant="outline" size="sm" className="h-8 gap-1.5">
              <Pencil className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Edit</span>
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 gap-1.5 text-destructive hover:bg-destructive hover:text-destructive-foreground"
            onClick={() => onDelete(task.id)}
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
