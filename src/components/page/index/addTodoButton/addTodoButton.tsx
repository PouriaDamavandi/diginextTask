import type { FC } from "react";
import AddIcon from "../../../ui/icons/addIcon";
import MainButton from "../../../ui/button/MainButton/mainButton";

interface AddTodoButtonProps {
  onClick: () => void;
}

const AddTodoButton: FC<AddTodoButtonProps> = ({ onClick }) => (
  <MainButton
    text="Add ToDo"
    type="button"
    icon={<AddIcon className="color-white" />}
    className="btn-success , text-white"
    onClick={onClick}
  />
);

export default AddTodoButton;
