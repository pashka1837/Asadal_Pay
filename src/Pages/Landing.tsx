import { Sheet } from "@mui/joy";
import { useAppSelector } from "../hooks/hooks";
import { TaskEl, NoTasks } from "../Copmonents";

export default function Landing() {
  const tasks = useAppSelector((store) => store.tasks.tasks);
  const todoTasks = tasks.filter((task) => !task.isDone);
  if (!todoTasks.length) return <NoTasks text="No TODO tasks" />;
  return (
    <Sheet className="tasksBoard">
      {todoTasks.map((task) => {
        return <TaskEl key={task.id} task={task} />;
      })}
    </Sheet>
  );
}
