import { useLocation, useNavigate } from "react-router-dom";
import ModalBG from "../Copmonents/ModalBG";
import ModifyTask from "../Copmonents/ModifyTask";
import { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { updTask } from "../features/tasksSlice/tasksSlice";

export default function EditTask() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const task = location.state as TaskT;

  const [inputs, setInputs] = useState<InputsStateT>({
    title: task.title,
    desc: task.desc,
  });

  const handleInpChange: handleInpChangeT = (e, name) => {
    const inp = e.target;
    console.log(inp.value);
    setInputs({ ...inputs, [`${name}`]: inp.value });
  };

  const handleSubmit: handleInpSubmitT = (e) => {
    e.preventDefault();
    const newTask: TaskT = {
      ...task,
      title: inputs.title,
      desc: inputs.desc,
    };
    dispatch(updTask(newTask));
    navigate("/");
  };

  console.log(task);

  const componValues = {
    plcHldrTitle: "",
    plcHldrDesc: "",
    btnName: "Edit Task",
    dfltTitle: task.title,
    dfltDesc: task.desc,
  };

  return (
    <ModalBG>
      <ModifyTask
        componValues={componValues}
        inputs={inputs}
        handleInpChange={handleInpChange}
        handleSubmit={handleSubmit}
      />
    </ModalBG>
  );
}
