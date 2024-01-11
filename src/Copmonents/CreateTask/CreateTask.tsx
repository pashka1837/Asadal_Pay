import { Button, Sheet, Stack } from "@mui/joy";
import { Form } from "react-router-dom";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
import { useAppDispatch } from "../../hooks/hooks";
import { addTask } from "../../features/tasksSlice/tasksSlice";
import { nanoid } from "nanoid";
import moment from "moment";
import { useState } from "react";
import ModifyTask from "../ModifyTask";

export default function CreateTask() {
  const [inputs, setInputs] = useState<InputsStateT>({ title: "", desc: "" });
  const dispatch = useAppDispatch();

  const handleInpChange: handleInpChangeT = (e, name) => {
    const inp = e.target;
    setInputs({ ...inputs, [`${name}`]: inp.value });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    const newTask: TaskT = {
      ...inputs,
      id: nanoid(),
      date: moment().format("DD/MM/YYYY"),
      isDone: false,
    };
    setInputs({ title: "", desc: "" });
    dispatch(addTask(newTask));
  }

  const componValues = {
    plcHldrTitle: "Enter title of task",
    plcHldrDesc: "Enter description of task",
    btnName: "Create Task",
    dfltTitle: "",
    dfltDesc: "",
  };

  return (
    <ModifyTask
      componValues={componValues}
      inputs={inputs}
      handleInpChange={handleInpChange}
      handleSubmit={handleSubmit}
    />
  );
}
