import { useLocation } from "react-router-dom";
import ModalBG from "../Copmonents/ModalBG";
import SingleTask from "../Copmonents/SingleTask";

export default function Task() {
  const location = useLocation();
  const task = location.state as TaskT;
  return (
    <ModalBG>
      <SingleTask task={task} />
    </ModalBG>
  );
}
