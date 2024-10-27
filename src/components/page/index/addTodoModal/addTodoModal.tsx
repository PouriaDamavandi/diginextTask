import type { FC } from "react";
import MainInput from "../../../ui/input/mainInput/mainInput";
import MainButton from "../../../ui/button/MainButton/mainButton";

interface AddTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  addTodo: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  isEditing: boolean;
}

const AddTodoModal: FC<AddTodoModalProps> = ({
  isOpen,
  onClose,
  addTodo,
  onChange,
  onAdd,
  isEditing,
}) => {
  if (!isOpen) return null;

  return (
    <dialog open className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          {isEditing ? "Edit ToDo" : "Add ToDo"}
        </h3>
        <MainInput
          inputProps={{
            value: addTodo,
            onChange: (e) => onChange(e.target.value),
            placeholder: "Enter todo title",
          }}
        />
        <div className="modal-action">
          <MainButton
            type="button"
            text={isEditing ? "Update" : "Create"}
            onClick={onAdd}
          />
          <MainButton type="button" text="Close" onClick={onClose} />
        </div>
      </div>
    </dialog>
  );
};

export default AddTodoModal;
