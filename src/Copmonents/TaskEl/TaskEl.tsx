import { Button, Checkbox, Sheet, Stack, Typography } from "@mui/joy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../hooks/hooks";
import { dltTask, updTask } from "../../features/tasksSlice/tasksSlice";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function TaskEl({ task }: { task: TaskT }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const checkBoxRef = useRef<HTMLSpanElement>(null);
  const { id, date, title, isDone } = task;

  function handleDoneTask(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(updTask({ ...task, isDone: true }));
  }

  function handleDeleteTask(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    dispatch(dltTask(id));
  }

  function handleEditTask(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    navigate("edit-task", { state: task });
  }

  function handleOpenTask(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    const cheBoxEl =
      checkBoxRef.current!.firstElementChild!.firstElementChild!
        .firstElementChild;
    if (e.target === cheBoxEl) return;
    navigate("task", { state: task });
  }

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
              onClick={handleEditTask}
              variant="plain"
              className="taskElBtn"
            >
              <MoreVertIcon />
            </Button>
            <Button
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
          sx={{ width: "70px" }}
        />
      </Stack>
    </Sheet>
  );
}
