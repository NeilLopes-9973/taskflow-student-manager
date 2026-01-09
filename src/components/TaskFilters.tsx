import { TaskFilter } from '@/hooks/useTasks';
import { ListFilter, CheckCircle2, Clock } from 'lucide-react';

interface TaskFiltersProps {
  filter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
  counts: {
    all: number;
    completed: number;
    pending: number;
  };
}

const TaskFilters = ({ filter, onFilterChange, counts }: TaskFiltersProps) => {
  const filters: { value: TaskFilter; label: string; icon: React.ReactNode; count: number }[] = [
    { value: 'all', label: 'All Tasks', icon: <ListFilter className="h-4 w-4" />, count: counts.all },
    { value: 'pending', label: 'Pending', icon: <Clock className="h-4 w-4" />, count: counts.pending },
    { value: 'completed', label: 'Completed', icon: <CheckCircle2 className="h-4 w-4" />, count: counts.completed },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ value, label, icon, count }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`filter-btn flex items-center gap-2 ${
            filter === value ? 'filter-btn-active' : 'filter-btn-inactive'
          }`}
        >
          {icon}
          <span>{label}</span>
          <span className={`ml-1 rounded-full px-2 py-0.5 text-xs ${
            filter === value 
              ? 'bg-primary-foreground/20' 
              : 'bg-muted-foreground/10'
          }`}>
            {count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
