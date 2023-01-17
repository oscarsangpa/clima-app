import useWeather from "../hooks/useWeather";
import Form from "./Form"
import WeatherResult from "./WeatherResult";


const AppClima = () => {

    const { result } = useWeather()
  return (
    <>
    <main className="two-columns">
        <Form/>
        {result?.name && <WeatherResult/> }
        
    </main>
    </>
  )
}

export default AppClima