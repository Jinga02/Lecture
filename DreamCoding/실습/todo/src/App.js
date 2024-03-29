import { useState } from "react";
import Header from "./component/Header/Header";
import TodoList from "./component/TodoList/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const filters = ["all", "active", "completed"];
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filter={filter} filters={filters} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
