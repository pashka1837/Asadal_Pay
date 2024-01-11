import { useLocation, useNavigate } from "react-router-dom";
import { ModalBG, ModifyTask } from "../Copmonents";
import { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { updTask } from "../features/tasksSlice/tasksSlice";
import { useUpdTaskMutation } from "../services/tasksApi";

export default function EditTask() {
  const [updTask] = useUpdTaskMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const task = location.state.task as TaskT;

  const homePath = location.state.pathname as string;

  const [inputs, setInputs] = useState<InputsStateT>({
    title: task.title,
    desc: task.desc,
  });

  const handleInpChange: handleInpChangeT = (e, name) => {
    const inp = e.target;
    setInputs({ ...inputs, [`${name}`]: inp.value });
  };

  const handleSubmit: handleInpSubmitT = (e) => {
    e.preventDefault();
    const newTask: TaskT = {
      ...task,
      title: inputs.title,
      desc: inputs.desc,
    };
    // dispatch(updTask(newTask));
    updTask(newTask);
    navigate(`${homePath}`);
  };

  const componValues = {
    plcHldrTitle: "",
    plcHldrDesc: "",
    btnName: "Edit Task",
    dfltTitle: task.title,
    dfltDesc: task.desc,
  };

  return (
    <ModalBG homePath={homePath}>
      <ModifyTask
        componValues={componValues}
        inputs={inputs}
        handleInpChange={handleInpChange}
        handleSubmit={handleSubmit}
      />
    </ModalBG>
  );
}
