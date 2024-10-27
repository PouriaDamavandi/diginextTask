import type { FC } from "react";
import MainModal from "../../../ui/modal/mainModal/mainModal";
import MainInput from "../../../ui/input/mainInput/mainInput";
import MainButton from "../../../ui/button/MainButton/mainButton";

interface AddTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  addTodo: string;
  onChange: (value: string) => void;
  onAdd: () => void;
}

const AddTodoModal: FC<AddTodoModalProps> = ({
  isOpen,
  onClose,
  addTodo,
  onChange,
  onAdd,
}) => (
  <MainModal isOpen={isOpen} onClose={onClose} title="Add ToDo">
    <div className="flex flex-row justify-start items-center gap-4">
      <MainInput
        inputProps={{
          value: addTodo,
          onChange: (e) => onChange(e.target.value),
          placeholder: "Enter new ToDo",
        }}
      />
      <MainButton
        text="Create"
        type="button"
        className="btn-success"
        onClick={onAdd}
      />
    </div>
  </MainModal>
);

export default AddTodoModal;
