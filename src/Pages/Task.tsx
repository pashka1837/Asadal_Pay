import { useLocation } from "react-router-dom";
import { ModalBG, SingleTask } from "../Copmonents";

export default function Task() {
  const location = useLocation();
  const task = location.state.task as TaskT;
  const homePath = location.state.pathname as string;
  return (
    <ModalBG homePath={homePath}>
      <SingleTask task={task} homePath={homePath} />
    </ModalBG>
  );
}
