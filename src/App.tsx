import "./App.css"
import RandomPokemon from "./RandomPokemon"

function App() {
  return (
    <RandomPokemon
      graphQL
      styleContainer={{ border: "1px solid #a6a6a6" }}
      styleTitle={{ color: "#4d4d4d" }}
    />
  )
}

export default App
