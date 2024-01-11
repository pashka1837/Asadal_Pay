import { Sheet } from "@mui/joy";
import { NoTasks, TaskEl } from "../Copmonents";
import { useAppSelector } from "../hooks/hooks";

import { Outlet } from "react-router-dom";

export default function DoneTasks() {
  const { tasks } = useAppSelector((store) => store.tasks);
  const doneTasks = tasks.filter((task) => task.isDone);
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
