import { useState } from "react";
import SearchInput from "./searchInput/searchInput";
import AddTodoButton from "./addTodoButton/addTodoButton";
import AddTodoModal from "./addTodoModal/addTodoModal";
import TodoList from "./todoList/todoList";
import useLocalStorage from "../../../hooks/useLocalStorage/useLocalStorage";
import type { Todo } from "../../../types/globalTypes";

const HomePage = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [searchState, setSearchState] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addTodo, setAddTodo] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchState.toLowerCase())
  );

  const handleAddTodo = () => {
    if (addTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), title: addTodo, completed: false },
      ]);
      setAddTodo("");
      setIsModalOpen(false);
    }
  };

  const toggleTodoCompletion = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-4 bg-mainWhite w-full">
        <SearchInput value={searchState} onChange={setSearchState} />
        <AddTodoButton onClick={() => setIsModalOpen(true)} />
      </div>

      <AddTodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addTodo={addTodo}
        onChange={setAddTodo}
        onAdd={handleAddTodo}
      />

      <TodoList
        todos={filteredTodos}
        onToggleComplete={toggleTodoCompletion}
        onDelete={handleDeleteTodo}
      />
    </>
  );
};

export default HomePage;
