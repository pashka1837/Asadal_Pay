import { Button, Sheet, Stack } from "@mui/joy";
import { Form } from "react-router-dom";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
import { useAppDispatch } from "../../hooks/hooks";
import { addTask } from "../../features/tasksSlice/tasksSlice";
import { nanoid } from "nanoid";
import moment from "moment";
import { useState } from "react";

export default function CreateTask() {
  const [inputs, setInputs] = useState<InputsStateT>({ title: "", desc: "" });
  const dispatch = useAppDispatch();

  const handleInpChange: handleInpChangeT = (e, name) => {
    const inp = e.target;
    console.log(inp.value);
    setInputs({ ...inputs, [`${name}`]: inp.value });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    const newTask: TaskT = {
      ...inputs,
      id: nanoid(),
      date: moment().format("l"),
      isDone: false,
    };
    setInputs({ title: "", desc: "" });
    dispatch(addTask(newTask));
  }

  return (
    <Sheet sx={{ p: 4, width: "350px" }}>
      <Form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <MyInput
            label="Title"
            name="title"
            placeholder="Enter title of task"
            handleInpChange={handleInpChange}
          />
          <MyTextArea
            label="Description"
            name="desc"
            placeholder="Enter description of task"
            handleInpChange={handleInpChange}
          />
          <Button
            disabled={!inputs.desc || !inputs.title ? true : false}
            type="submit"
          >
            Create Task
          </Button>
        </Stack>
      </Form>
    </Sheet>
  );
}
