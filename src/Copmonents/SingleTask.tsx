import { Button, Sheet, Stack, Typography } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function SingleTask({
  homePath,
  task,
}: {
  task: TaskT;
  homePath: string;
}) {
  const navigate = useNavigate();

  const color = task.isDone ? "success" : "primary";

  function handleClose() {
    navigate(`${homePath}`);
  }
  return (
    <Sheet
      color={color}
      variant="soft"
      sx={{ p: 3, width: "450px", borderRadius: "10px" }}
    >
      <Stack spacing={2}>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={4}>
            <Typography level="title-md" color={color}>
              {task.isDone ? "DONE" : "NOT DONE"}
            </Typography>
            <Typography level="body-md">Created: {task.date}</Typography>
          </Stack>
          <Button onClick={handleClose} color={color} variant="plain">
            <CloseIcon />
          </Button>
        </Stack>
        <Typography sx={{ wordBreak: "break-word", pr: "40px" }} level="h3">
          {task.title}
        </Typography>
        <Typography level="body-md">{task.desc}</Typography>
      </Stack>
    </Sheet>
  );
}
