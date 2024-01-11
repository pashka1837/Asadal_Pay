type TaskT = {
  id: string;
  date: string;
  title: string;
  desc: string;
  isDone: boolean;
};

type InputsStateT = {
  title: string;
  desc: string;
};

type handleInpChangeT = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  name: string
) => void;

type handleInpSubmitT = (e: React.FormEvent<HTMLFormElement>) => void;

type MyInputPropsT = {
  defaultValue: string;
  label: string;
  name: string;
  placeholder: string;
  handleInpChange: handleInpChangeT;
};

type ComponValuesT = {
  plcHldrTitle: string;
  plcHldrDesc: string;
  btnName: string;
  dfltTitle: string;
  dfltDesc: string;
};

type ModifyTaskPropsT = {
  componValues: ComponValuesT;
  inputs: InputsStateT;
  handleInpChange: handleInpChangeT;
  handleSubmit: handleInpSubmitT;
};

// export { TaskT, MyInputT, InputsStateT, handleInpChangeT };
