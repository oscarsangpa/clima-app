
const Form = () => {
  return (
    <div className="container">
        <form>
            <div className="field">
                <label htmlFor="city"> City </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                />
            </div>
            <div className="field">
                <label htmlFor="country"> Country </label>
                <select
                    id="country"
                    name="country"
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