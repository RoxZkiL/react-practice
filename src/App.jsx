import "./App.css";
import TwitterCard from "./Components/TwitterCard";

function App() {
  return (
    <section className="App">
      <TwitterCard name="Jesús Matute" userName="RoxZkiL" />
      <TwitterCard name="Miguel Ángel Duran" userName="midudev" />
      <TwitterCard name="Elon Musk" userName="elonmusk" />
    </section>
  );
}

export default App;
