import { Sheet, Typography } from "@mui/joy";

export default function NoTasks({ text }: { text: string }) {
  return (
    <Sheet className="noTasks" color="primary" variant="outlined">
      <Typography level="h2">{text}</Typography>
    </Sheet>
  );
}
