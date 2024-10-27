// src/pages/HomePage.tsx
import { useState } from "react";
import MainButton from "../../ui/button/MainButton/mainButton";
import AddIcon from "../../ui/icons/addIcon";
import MainInput from "../../ui/input/mainInput/mainInput";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../../../hooks/useLocalStorage/useLocalStorage";
import type { Todo } from "../../../types/globalTypes";
import AddTodoModal from "./addTodoModal/addTodoModal";
import TodoList from "./todoList/todoList";

const HomePage = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [searchState, setSearchState] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [addTodo, setAddTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleAddTodo = () => {
    if (addTodo.trim()) {
      setTodos([...todos, { id: uuidv4(), title: addTodo, completed: false }]);
      resetModalState();
    }
  };

  const handleEditTodo = () => {
    if (editingTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, title: addTodo } : todo
        )
      );
      resetModalState();
    }
  };

  const handleCompleteTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemoveTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditTodo = (todo: Todo) => {
    setEditingTodo(todo);
    setAddTodo(todo.title);
    setIsEditModalOpen(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchState(e.target.value);

  const resetModalState = () => {
    setAddTodo("");
    setEditingTodo(null);
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchState.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-4 bg-mainWhite w-full">
        <MainInput
          inputProps={{
            value: searchState,
            onChange: handleSearchChange,
            placeholder: "Search ToDos",
          }}
        />

        <MainButton
          text="Add ToDo"
          type="button"
          icon={<AddIcon className="color-white" />}
          className="btn-success text-white"
          onClick={() => {
            setEditingTodo(null);
            setIsAddModalOpen(true);
          }}
        />
      </div>

      <AddTodoModal
        isOpen={isAddModalOpen || isEditModalOpen}
        onClose={resetModalState}
        addTodo={addTodo}
        onChange={setAddTodo}
        onAdd={isEditModalOpen ? handleEditTodo : handleAddTodo}
        isEditing={isEditModalOpen}
      />

      <TodoList
        todos={filteredTodos}
        onComplete={handleCompleteTodo}
        onEdit={startEditTodo}
        onRemove={handleRemoveTodo}
      />
    </>
  );
};

export default HomePage;
