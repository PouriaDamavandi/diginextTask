import type { FC } from "react";
import MainButton from "../../../../ui/button/MainButton/mainButton";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete }) => (
  <div className={"flex items-center justify-between p-2 border-b "}>
    <span className={`${todo.completed ? "line-through text-gray-500" : ""}`}>
      {todo.title}
    </span>
    <div className="flex gap-2">
      <MainButton
        text={todo.completed ? "Undo" : "Complete"}
        type="button"
        className={`btn ${todo.completed ? "btn-warning" : "btn-primary"}`}
        onClick={() => onToggleComplete(todo.id)}
      />
      <MainButton
        text="Delete"
        type="button"
        className="btn btn-error"
        onClick={() => onDelete(todo.id)}
      />
    </div>
  </div>
);

export default TodoItem;
