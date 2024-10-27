import type { FC } from "react";
import MainInput from "../../../ui/input/mainInput/mainInput";
import MainModal from "../../../ui/modal/mainModal/mainModal";
import MainButton from "../../../ui/button/MainButton/mainButton";
import type { Todo } from "../../../../types/globalTypes";

interface EditTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingTodo: Todo | null;
  onChange: (value: string) => void;
  onEdit: (newTitle: string) => void;
}

const EditTodoModal: FC<EditTodoModalProps> = ({
  isOpen,
  onClose,
  editingTodo,
  onChange,
  onEdit,
}) => {
  if (!editingTodo) return null;

  return (
    <MainModal isOpen={isOpen} onClose={onClose} title="Edit ToDo">
      <div className="flex flex-row justify-start items-center gap-4">
        <MainInput
          inputProps={{
            value: editingTodo.title,
            onChange: (e) => onChange(e.target.value),
          }}
        />
        <MainButton
          text="Update"
          type="button"
          className="btn-success"
          onClick={() => onEdit(editingTodo.title)}
        />
      </div>
    </MainModal>
  );
};

export default EditTodoModal;
