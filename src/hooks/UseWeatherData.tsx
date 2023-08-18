import axios from 'axios'
import { useQuery } from 'react-query'
const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=33.7215&longitude=73.0433&hourly=temperature_2m,apparent_temperature,visibility&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&timezone=auto&start_date=2023-08-17&end_date=2023-08-24'

const fetchWeatherData = () => {
    return axios.get(apiUrl).then(res => res.data)
}

const UseWeatherData = () => {
    return useQuery('WeatherData', fetchWeatherData)
}

export default UseWeatherData;