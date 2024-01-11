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

type MyInputT = {
  label: string;
  name: string;
  placeholder: string;
  handleInpChange: handleInpChangeT;
};

// export { TaskT, MyInputT, InputsStateT, handleInpChangeT };
