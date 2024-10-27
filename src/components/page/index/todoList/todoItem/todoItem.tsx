import type React from "react";
import type { Todo } from "../../../../../types/globalTypes";
import MainButton from "../../../../ui/button/MainButton/mainButton";

interface TodoItemProps {
  todo: Todo;
  onComplete: (id: string) => void;
  onEdit: (todo: Todo) => void;
  onRemove: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onComplete,
  onEdit,
  onRemove,
}) => {
  return (
    <div
      className={`todo-item flex justify-between items-center p-4 border rounded shadow ${
        todo.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
        {todo.title}
      </span>
      <div className="flex gap-2">
        <MainButton
          text="Complete"
          type="button"
          className="btn-complete"
          onClick={() => onComplete(todo.id)}
        />
        <MainButton
          text="Edit"
          type="button"
          className="btn-edit"
          onClick={() => onEdit(todo)}
        />
        <MainButton
          text="Remove"
          type="button"
          className="btn-remove"
          onClick={() => onRemove(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
