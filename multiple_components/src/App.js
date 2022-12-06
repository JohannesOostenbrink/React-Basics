import "./App.css";
import Card "./Card";

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card h2 = "first card's h2" h3 = "first card's h3" />
      <Card h2 = "second card's h2" h3 = "second card's h3" />
      <Card  h2 = "third card's h2" h3 = "third card's h3"/>
    </div>
  );
}

export default App;
