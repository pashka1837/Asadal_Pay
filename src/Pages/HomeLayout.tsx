import { Outlet } from "react-router-dom";
import { CreateTask, NavBar } from "../Copmonents";
import { useAppSelector } from "../hooks/hooks";

export default function HomeLayout() {
  const { isCreateTaskOpen } = useAppSelector((store) => store.tasks);

  return (
    <main className="homeLayout">
      <NavBar />
      {isCreateTaskOpen && <CreateTask />}
      <Outlet />
    </main>
  );
}
