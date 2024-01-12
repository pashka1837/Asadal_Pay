import { Button, Sheet } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setIsCreateTaskOpen } from "../features/tasksSlice/tasksSlice";
export default function NavBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isCreateTaskOpen } = useAppSelector((store) => store.tasks);

  function handleOpenTasks() {
    dispatch(setIsCreateTaskOpen(false));
    navigate("/done-tasks");
  }
  return (
    <Sheet className="navbar" variant="solid" color="primary">
      <Button
        onClick={() => dispatch(setIsCreateTaskOpen(!isCreateTaskOpen))}
        variant="soft"
      >
        {isCreateTaskOpen ? "Close" : "Open"} "Create New Task" tab
      </Button>

      <Button onClick={handleOpenTasks} variant="soft">
        Open DONE Tasks
      </Button>
    </Sheet>
  );
}
