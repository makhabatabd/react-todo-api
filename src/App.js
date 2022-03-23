import "./App.css";
import MyRoutes from "./components/Routes";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div>
      <TodoContextProvider>
        <MyRoutes />
      </TodoContextProvider>
    </div>
  );
}

export default App;
