import { useNavigate } from "react-router-dom";

export default function ModalBG({
  children,
  homePath,
}: {
  homePath: string;
  children: JSX.Element | JSX.Element[];
}) {
  const navigate = useNavigate();

  const handleClickOutside: handleClicksT = (e) => {
    if (e.currentTarget === e.target) {
      navigate(`${homePath}`);
    }
  };
  return (
    <div className="modalBG" onClick={handleClickOutside}>
      {children}
    </div>
  );
}
