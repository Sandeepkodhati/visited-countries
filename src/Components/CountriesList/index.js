import './index.css'

const CountriesList = props => {
  const {countriesData, updateVisitedCountries} = props
  const {id, name, isVisited} = countriesData

  const onClickVisited = () => {
    updateVisitedCountries(id)
    console.log(isVisited)
  }

  return (
    <li className="">
      <div className="wraper">
        <p className="name">{name}</p>
        {isVisited ? (
          <p className="visited">Visited</p>
        ) : (
          <button type="button" className="buttons" onClick={onClickVisited}>
            Visit
          </button>
        )}
      </div>
      <hr className="hr" />
    </li>
  )
}

export default CountriesList
