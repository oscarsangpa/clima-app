import useWeather from "../hooks/useWeather"

const WeatherResult = () => {

    const { result } = useWeather()
    const { name, main } = result

    // Kelvin
    const kelvin = 273.15

  return (
    <div className="container weather">
        <h2> The weather of {name} is: </h2>

        <p>
            { parseInt(main.temp - kelvin) } <span>&#x2103;</span>
        </p>
        <div className="temp-min-max">
        <p>
            Min: { parseInt(main.temp_min - kelvin) } <span>&#x2103;</span>
        </p>
        <p>
            Max: { parseInt(main.temp_max - kelvin) } <span>&#x2103;</span>
        </p>
        
        </div>
    </div>
  )
}

export default WeatherResult