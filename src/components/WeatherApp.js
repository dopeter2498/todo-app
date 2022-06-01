const WeatherApp = () => {
    const userAction = async () => {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=0b191e287c8f4c398da180530222505&q=San Jose&aqi=no');
        const myJson = await response.json(); //extract JSON from the http response
        // do something with myJson
        console.log(myJson.current.temp_f);
    }
    userAction();

    return (
        <div className="WeatherApp">
        <header>
            <h1>Weather</h1>
        </header>
        </div>
    )
}

export default WeatherApp;