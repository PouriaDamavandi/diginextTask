// src/components/todoList/todoList.tsx
import type React from "react";
import TodoItem from "./todoItem/todoItem";
import type { Todo } from "../../../../types/globalTypes";

interface TodoListProps {
  todos: Todo[];
  onComplete: (id: string) => void;
  onEdit: (todo: Todo) => void;
  onRemove: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onComplete,
  onEdit,
  onRemove,
}) => {
  return (
    <div className="flex flex-col-reverse gap-4 mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;
