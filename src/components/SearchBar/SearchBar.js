import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

const SearchBar = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)

  const handleonChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  const loadOptions = (inputValue) =>
    fetch(
      `${process.env.REACT_APP_API_URL_GEO}?q=${inputValue || 'Miami'}&limit=5&appid=${process.env.REACT_APP_API_KEY}`,
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.map((city) => {
            return {
              value: { lat: city.lat, lon: city.lon, name: city.name },
              label: `${city.name}, ${city.country}`,
            }
          }),
        }
      })
      .catch((err) => console.log(err))

  return (
    <AsyncPaginate
      placeholder="Type name of a city...."
      debounceTimeout={600}
      value={search}
      onChange={handleonChange}
      loadOptions={loadOptions}
    />
  )
}

export default SearchBar
