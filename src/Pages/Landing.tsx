import { Sheet } from "@mui/joy";
import { useAppSelector } from "../hooks/hooks";
import { TaskEl, NoTasks, Loader } from "../Copmonents";
import { useGetTasksQuery, useQueryStateResult } from "../services/tasksApi";

export default function Landing() {
  // const { tasks, isLoading } = useAppSelector((store) => store.tasks);
  const {
    data: tasks,
    isLoading,
    isFetching,
    isUninitialized,
  } = useGetTasksQuery();

  console.log(isLoading, isFetching, isUninitialized);
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
