import UseWeatherData from "../hooks/UseWeatherData"
import './Weather.css'
import moment from "moment"

const Weather = () => {
    const weatherData = UseWeatherData()

    if (weatherData.isLoading) {
        return <h1>Loading...</h1>
    }

    if(weatherData.isError) {
        return <h1>Error: {(weatherData.error as Error).message}</h1>
    }

    console.log(weatherData)
    return (
        <div className="weather--container">
            <h1 className="weather--header">{weatherData.data.timezone}</h1>
            <div className="weather--basic--info">
                <h2 className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></h2>
                <h2 className="temp">Current Temperature: {(weatherData.data.current_weather.temperature).toFixed(0)} C</h2>
            </div>
            <div className="detailed--weather--info">
                <h3 className="left--grid--item">Maximum Temp: {weatherData.data.daily.temperature_2m_max[0]}</h3>
                <h3 className="right--grid--item">Minimum Temp: {weatherData.data.daily.temperature_2m_min[0]}</h3>
                <h3 className="left--grid--item">Feels like (max): {weatherData.data.daily.apparent_temperature_max[0]}</h3>
                <h3 className="right--grid--item">Feels like (min): {weatherData.data.daily.apparent_temperature_min[0]}</h3>
                <h3 className="left--grid--item">Wind Speed: {weatherData.data.current_weather.windspeed} km/h</h3>
                <h3 className="right--grid--item">Wind Direction: {weatherData.data.current_weather.winddirection}°</h3>
            </div>
            <div style={{ display: 'flex', padding: "10px", paddingTop:"30px" }} >
                {weatherData.data.daily.time.map((date: string, index: number) => (
                    <div className="future--forcast" key={date}>
                        <h4 style={{fontWeight: '600', marginBottom: '5px'}}>{date.slice(-2)}</h4>
                        <h5 style={{fontSize: '12px'}}>High: {weatherData.data.daily.temperature_2m_max[index]} C</h5>
                        <h5 style={{fontSize: '12px'}}>Low: {weatherData.data.daily.temperature_2m_min[index]} C</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Weather