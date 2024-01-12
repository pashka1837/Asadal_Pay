import { Button, Sheet, Stack, Typography } from "@mui/joy";
import { Form, useLocation, useNavigate } from "react-router-dom";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
import CloseIcon from "@mui/icons-material/Close";

export default function ModifyTask({
  handleSubmit,
  handleInpChange,
  inputs,
  componValues,
}: ModifyTaskPropsT) {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const homePath = pathname.replace("edit-task", "");
  const { plcHldrTitle, plcHldrDesc, dfltTitle, dfltDesc, btnName } =
    componValues;
  return (
    <Sheet sx={{ p: 4, width: "350px", borderRadius: "10px" }}>
      {pathname.length > 2 && (
        <Stack direction="row" justifyContent="space-between">
          <Typography level="title-lg">Change Task</Typography>
          <Button onClick={() => navigate(`${homePath}`)} variant="plain">
            <CloseIcon />
          </Button>
        </Stack>
      )}
      <Form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <MyInput
            label="Title"
            name="title"
            defaultValue={dfltTitle}
            placeholder={plcHldrTitle}
            handleInpChange={handleInpChange}
          />
          <MyTextArea
            label="Description"
            name="desc"
            defaultValue={dfltDesc}
            placeholder={plcHldrDesc}
            handleInpChange={handleInpChange}
          />
          <Button
            disabled={!inputs.desc || !inputs.title ? true : false}
            type="submit"
          >
            {btnName}
          </Button>
        </Stack>
      </Form>
    </Sheet>
  );
}
