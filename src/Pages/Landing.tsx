import { Sheet } from "@mui/joy";
import { useAppSelector } from "../hooks/hooks";
import TaskEl from "../Copmonents/TaskEl/TaskEl";
import NoTasks from "../Copmonents/NoTasks";

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
