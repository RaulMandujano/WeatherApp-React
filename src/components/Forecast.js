import '../components/Forecast.css';


function Forecast({maxtemp_f}) {

    return (
        <div className="card-forecast">
                <h1>{maxtemp_f}</h1>
                <img src='' alt='icon' />
                <h3></h3>
                <h1></h1>
                <p className="region-forecast"></p>
            
        </div>
    )
}

export default Forecast;