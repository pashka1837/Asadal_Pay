import { Button, Sheet } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  setIsCreateTaskOpen,
  setIsDoneTasskOpen,
} from "../features/tasksSlice/tasksSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function NavBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isCreateTaskOpen, isDoneTasksOpen } = useAppSelector(
    (store) => store.tasks
  );

  function handleOpenTasks() {
    dispatch(setIsDoneTasskOpen(!isDoneTasksOpen));
    dispatch(setIsCreateTaskOpen(false));
    if (isDoneTasksOpen) navigate("/");
    else navigate("/done-tasks");
  }
  return (
    <Sheet
      className="navbar"
      variant="solid"
      color="primary"
      sx={{ width: "100%", height: "10vh", zIndex: "2" }}
    >
      {!isDoneTasksOpen && (
        <Button
          onClick={() => dispatch(setIsCreateTaskOpen(!isCreateTaskOpen))}
          variant="soft"
        >
          Open "Create New Task" tab
        </Button>
      )}
      <Button
        onClick={handleOpenTasks}
        variant="soft"
        startDecorator={isDoneTasksOpen && <ArrowBackIcon />}
      >
        {!isDoneTasksOpen ? "Open DONE Tasks" : "Back Home"}
      </Button>
    </Sheet>
  );
}
