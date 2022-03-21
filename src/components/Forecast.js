import '../components/Forecast.css';


function Forecast({maxtemp_f, sunrise, sunset, icon, date}) {

    return (
        <div className="forecast">
            <div className="card-forecast">
                <h2>{date}</h2>
                <h1>{maxtemp_f}</h1>
                <img src={icon} alt='icon' />
                <h3>{sunrise}</h3>
                <h3>{sunset}</h3>
                <p className="region-forecast"></p>
            </div>
            
        </div>
    )
}

export default Forecast;