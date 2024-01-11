import { Box, Button, Sheet } from "@mui/joy";
import { Outlet } from "react-router-dom";
import CreateTask from "../Copmonents/CreateTask/CreateTask";

export default function HomeLayout() {
  return (
    <main className="homeLayout">
      <CreateTask />
      <Outlet />
    </main>
  );
}
