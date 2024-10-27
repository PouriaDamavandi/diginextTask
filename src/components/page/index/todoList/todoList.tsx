import type { FC } from "react";
import TodoItem from "./todoItem/todoItem";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onToggleComplete, onDelete }) => (
  <div className="p-4">
    {todos.length > 0 ? (
      todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))
    ) : (
      <p className="text-center text-gray-500">No todos found.</p>
    )}
  </div>
);

export default TodoList;
