import Input from "./ components/Input";
import TodoList from "./ components/TodoList";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">TodoList</h1>
      <Input />
      <TodoList />
    </>
  );
}

export default App;
