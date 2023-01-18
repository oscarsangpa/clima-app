import useWeather from "../hooks/useWeather";
import Form from "./Form"
import Spinner from "./Spinner";
import WeatherResult from "./WeatherResult";


const AppClima = () => {

    const { result, loading, notFound } = useWeather()
  return (
    <>
    <main className="two-columns">
        <Form/>
        {loading ? <Spinner/> :
          result?.name ? <WeatherResult/> :
          notFound ? <p>{notFound}</p> :
          <p>The weather show here: </p> }
        
    </main>
    </>
  )
}

export default AppClima