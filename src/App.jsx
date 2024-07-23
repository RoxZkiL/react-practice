import "./App.css";
import TwitterCard from "./Components/TwitterCard";

function App() {
  const personas = [
    {
      name: "Jesus Matute",
      userName: "RoxZkiL",
    },
    { name: "Miguel Angel Duran", userName: "midudev" },
    {
      name: "Cristiano Ronaldo",
      userName: "cristiano",
    },
  ];

  return (
    <section className="App">
      {personas.map((persona, index) => (
        <TwitterCard
          key={index}
          name={persona.name}
          userName={persona.userName}
        />
      ))}
    </section>
  );
}

export default App;
