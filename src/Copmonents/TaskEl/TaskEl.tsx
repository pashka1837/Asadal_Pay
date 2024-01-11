import { Button, Checkbox, Sheet, Stack, Typography } from "@mui/joy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../hooks/hooks";
import { dltTask, updTask } from "../../features/tasksSlice/tasksSlice";
import { useNavigate } from "react-router-dom";

export default function TaskEl({ task }: { task: TaskT }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id, date, title, isDone } = task;

  function handleDoneTask() {
    dispatch(updTask({ ...task, isDone: true }));
  }

  function handleDeleteTask() {
    dispatch(dltTask(id));
  }

  function handleEditTask() {
    navigate("edit-task");
  }

  return (
    <Sheet
      color="primary"
      variant="outlined"
      sx={{ borderRadius: "5px", width: "300px", cursor: "pointer" }}
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
        <Checkbox onChange={handleDoneTask} label="Done" />
        <Typography sx={{ wordBreak: "break-word" }} level="title-lg">
          {title}
        </Typography>
      </Stack>
    </Sheet>
  );
}
