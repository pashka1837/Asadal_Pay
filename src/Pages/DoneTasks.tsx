import { Sheet } from "@mui/joy";
import { Loader, NoTasks, TaskEl } from "../Copmonents";
import { useAppSelector } from "../hooks/hooks";

import { Outlet } from "react-router-dom";
import { useGetTasksQuery, useQueryStateResult } from "../services/tasksApi";

export default function DoneTasks() {
  // const { tasks, isLoading } = useAppSelector((store) => store.tasks);
  const {
    data: tasks,
    isLoading,
    isFetching,
    isUninitialized,
  } = useGetTasksQuery();
  console.log(`done`, isLoading, isFetching, isUninitialized);

  if (isLoading) return <Loader />;
  const doneTasks = tasks!.filter((task) => task.isDone);
  if (!doneTasks.length) return <NoTasks text="No DONE tasks yet" />;
  return (
    <>
      <Sheet className="tasksBoard">
        {doneTasks.map((task) => {
          return <TaskEl key={task.id} task={task} />;
        })}
      </Sheet>
      <Outlet />
    </>
  );
}
