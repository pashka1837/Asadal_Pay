import { Box, Sheet } from "@mui/joy";
import { Outlet } from "react-router-dom";
import CreateTask from "../Copmonents/Task/CreateTask";

export default function HomeLayout() {
  return (
    <main className="homeLayout">
      <CreateTask />
      <Outlet />
    </main>
  );
}
