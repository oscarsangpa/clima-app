import { useState } from "react";
import useWeather from "../hooks/useWeather"
const Form = () => {
    const [alert, setAlert] = useState("")
    const { search, dataSearch, checkWeather} = useWeather()
    const { city, country } = search

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.values(search).includes("")) {
            setAlert("All fields are required")
            return
        }

        checkWeather(search)
    }

  return (
    <div className="container">
        { alert && <p>{alert}</p>}
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="city"> City </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={dataSearch}
                    value={city}
                />
            </div>
            <div className="field">
                <label htmlFor="country"> Country </label>
                <select
                    id="country"
                    name="country"
                    onChange={dataSearch}
                    value={country}
                    >
                    <option value="">-- Select Country --</option>
                    <option value="US"> United States</option>
                    <option value="MX"> Mexico</option>
                    <option value="AR"> Argentina </option>
                    <option value="ES"> Spain </option>
                </select>
            </div>
            <input
                type="submit"
                value="Check Weather"
            />
        </form>
    </div>
  )
}

export default Form