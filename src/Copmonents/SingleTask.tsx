import { Button, Sheet, Stack, Typography } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";

import moment from "moment";

export default function SingleTask({ task }: { task: TaskT }) {
  //   console.log(task);
  let when = moment(task.date, "DD/MM/YYYY").fromNow();
  when = when.includes(`hours`) ? "today" : when;
  console.log();

  return (
    <Sheet
      color={task.isDone ? "success" : "primary"}
      variant="outlined"
      sx={{ p: 4, width: "450px", borderRadius: "10px" }}
    >
      <Stack spacing={2}>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography level="title-lg">{task.title}</Typography>
          <Button>
            {" "}
            <CloseIcon />
          </Button>
        </Stack>
        <Typography level="body-md">{task.desc}</Typography>
        <Typography level="body-md">Created {when}</Typography>
      </Stack>
    </Sheet>
  );
}
