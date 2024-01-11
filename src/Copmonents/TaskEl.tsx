import { Button, Checkbox, Sheet, Stack, Typography } from "@mui/joy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../hooks/hooks";
import { dltTask, updTask } from "../features/tasksSlice/tasksSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import {
  useDeleteTaskMutation,
  useUpdTaskMutation,
} from "../services/tasksApi";

export default function TaskEl({ task }: { task: TaskT }) {
  const [deleteTask] = useDeleteTaskMutation();
  const [updTask] = useUpdTaskMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const checkBoxRef = useRef<HTMLSpanElement>(null);

  const { pathname } = location;

  const { id, date, title, isDone } = task;

  const color = task.isDone ? "success" : "primary";

  function handleDoneTask() {
    updTask({ ...task, isDone: !isDone });
    // dispatch(updTask({ ...task, isDone: !isDone }));
  }

  const handleDeleteTask: handleClicksT = (e) => {
    e.stopPropagation();
    deleteTask(id);
    // dispatch(dltTask(id));
  };

  const handleEditTask: handleClicksT = (e) => {
    e.stopPropagation();
    navigate("edit-task", { state: { task, pathname } });
  };

  const handleOpenTask: handleClicksT = (e) => {
    e.stopPropagation();
    const cheBoxEl =
      checkBoxRef.current!.firstElementChild!.firstElementChild!
        .firstElementChild;
    if (e.target === cheBoxEl) return;
    navigate("task", { state: { task, pathname } });
  };

  return (
    <Sheet
      onClick={handleOpenTask}
      color={task.isDone ? "success" : "primary"}
      variant="outlined"
      style={{
        borderRadius: "5px",
        width: "250px",
        cursor: "pointer",
      }}
    >
      <Stack spacing={2} p={2}>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography level="body-md">{date}</Typography>
          <Stack direction="row" spacing={1}>
            <Button
              color={color}
              onClick={handleEditTask}
              variant="plain"
              className="taskElBtn"
            >
              <MoreVertIcon />
            </Button>
            <Button
              color={color}
              onClick={handleDeleteTask}
              variant="plain"
              className="taskElBtn"
            >
              <CloseIcon />
            </Button>
          </Stack>
        </Stack>
        <Typography
          sx={{ wordBreak: "break-word", pr: "10px" }}
          level="title-lg"
        >
          {title}
        </Typography>
        <Checkbox
          ref={checkBoxRef}
          defaultChecked={isDone}
          onChange={handleDoneTask}
          label="Done"
          color={color}
          sx={{ width: "70px" }}
        />
      </Stack>
    </Sheet>
  );
}
