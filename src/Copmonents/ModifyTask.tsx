import { Button, Sheet, Stack } from "@mui/joy";
import { Form } from "react-router-dom";
import MyInput from "./CreateTask/MyInput";
import MyTextArea from "./CreateTask/MyTextArea";

export default function ModifyTask({
  handleSubmit,
  handleInpChange,
  inputs,
  componValues,
}: ModifyTaskPropsT) {
  const { plcHldrTitle, plcHldrDesc, dfltTitle, dfltDesc, btnName } =
    componValues;
  return (
    <Sheet sx={{ p: 4, width: "350px" }}>
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
