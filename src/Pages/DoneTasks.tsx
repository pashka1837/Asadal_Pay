import { Button, Sheet } from "@mui/joy";
import { Loader, NoTasks, TaskEl } from "../Copmonents";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import { Outlet, useNavigate } from "react-router-dom";
import { useGetTasksQuery, useQueryStateResult } from "../services/tasksApi";

export default function DoneTasks() {
  // const { tasks, isLoading } = useAppSelector((store) => store.tasks);
  const navigate = useNavigate();
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
      <Sheet className="navbar" variant="solid" color="primary">
        <Button
          onClick={() => navigate("/")}
          variant="soft"
          startDecorator={<ArrowBackIcon />}
        >
          "Back Home"
        </Button>
      </Sheet>
      <Sheet className="tasksBoard">
        {doneTasks.map((task) => {
          return <TaskEl key={task.id} task={task} />;
        })}
      </Sheet>
      <Outlet />
    </>
  );
}
