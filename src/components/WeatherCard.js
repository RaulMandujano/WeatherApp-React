import '../components/WeatherCard.css';


function WeatherCard({icon, temp_f, name, text, region})  {

    return (
        <div className="card">
                <h1>{name}</h1>
                <img src={icon} alt='icon' />
                <h3>{text}</h3>
                <h1>{temp_f}</h1>
                <p className="region">{region}</p>
            
        </div>
    )
}

export default WeatherCard;