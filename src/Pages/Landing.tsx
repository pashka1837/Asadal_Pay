import { Sheet } from "@mui/joy";
import { TaskEl, NoTasks, Loader } from "../Copmonents";
import { useGetTasksQuery } from "../services/tasksApi";

export default function Landing() {
  const { data: tasks, isLoading } = useGetTasksQuery();

  if (isLoading) return <Loader />;

  const todoTasks = tasks!.filter((task) => !task.isDone);

  if (!todoTasks.length) return <NoTasks text="No TODO tasks" />;

  return (
    <Sheet className="tasksBoard">
      {todoTasks.map((task) => {
        return <TaskEl key={task.id} task={task} />;
      })}
    </Sheet>
  );
}
