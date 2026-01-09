import { useTaskContext } from '@/context/TaskContext';
import { useAuth } from '@/context/AuthContext';
import TaskList from '@/components/TaskList';
import TaskFilters from '@/components/TaskFilters';
import { GraduationCap, TrendingUp, CheckCircle2, Clock, Loader2 } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const { tasks, filter, setFilter, toggleStatus, deleteTask, taskCounts, isLoading } = useTaskContext();

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const displayName = user?.email?.split('@')[0] || 'Student';

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="mb-8 rounded-2xl gradient-hero p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-primary shadow-lg">
              <GraduationCap className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Welcome back, {displayName}!
              </h1>
              <p className="text-muted-foreground">
                Stay organized and crush your academic goals
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-xl bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span className="text-xs font-medium">Total</span>
            </div>
            <p className="mt-1 text-2xl font-bold text-foreground">{taskCounts.all}</p>
          </div>
          <div className="rounded-xl bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2 text-warning">
              <Clock className="h-4 w-4" />
              <span className="text-xs font-medium">Pending</span>
            </div>
            <p className="mt-1 text-2xl font-bold text-foreground">{taskCounts.pending}</p>
          </div>
          <div className="rounded-xl bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2 text-success">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-xs font-medium">Done</span>
            </div>
            <p className="mt-1 text-2xl font-bold text-foreground">{taskCounts.completed}</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mb-6">
        <TaskFilters
          filter={filter}
          onFilterChange={setFilter}
          counts={taskCounts}
        />
      </section>

      {/* Task List */}
      <section>
        <TaskList
          tasks={tasks}
          onToggleStatus={toggleStatus}
          onDelete={deleteTask}
        />
      </section>
    </div>
  );
};

export default Dashboard;
