import { Outlet } from "react-router-dom";
import { CreateTask, Loader, NavBar } from "../Copmonents";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

export default function HomeLayout() {
  const { isCreateTaskOpen } = useAppSelector((store) => store.tasks);
  // const dispatch = useAppDispatch();
  // const { data, isLoading } = useGetTasksQuery();

  // if (isLoading) return <Loader />;
  // dispatch(setTasks(data));

  return (
    <main className="homeLayout">
      <NavBar />
      {isCreateTaskOpen && <CreateTask />}
      <Outlet />
    </main>
  );
}
