import { WeatherProvider } from "./context/WeatherProvider"
import AppClima from "./components/AppClima"

function App() {

  return (
    <WeatherProvider>
      <header>
        <h1> Weather Finder</h1>
      </header>
      <AppClima/>
    </WeatherProvider>
  )
}

export default App
