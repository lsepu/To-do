import "./App.css";
import ListOfToDo from "./components/ListOfToDo";
import StoreProvider from "./components/StoreProvider";

function App() {
  return (
    <StoreProvider>
        <h1>Test</h1>
        <ListOfToDo />
    </StoreProvider>
  );
}

export default App;
