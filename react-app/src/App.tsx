import ListGroup from "./components/ListGroup";

let items = ["New York", "San Francisco", "Tokyo", "London"];

function App() {
  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
    </div>
  );
}

export default App;
