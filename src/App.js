import React, {useState} from "react";
import "./App.css";
import axios from "axios";

function App() {
   const [city, setCity] = useState("");
   const [value, setValue] = useState(false);
   const [temperature, setTemperature] = useState(null);
   const [humidity, setHumidity] = useState("");
   const [wind, setWind] = useState(null);
   const [icon, setIcon] = useState("");
   const [place, setPlace] = useState("");

   const [description, setDescription] = useState("");
   function showTemperature(response) {
     setPlace(response.data.name);
     setValue(true);
     setTemperature(Math.round(response.data.main.temp));

     setHumidity(response.data.main.humidity);
     setWind(Math.round(response.data.wind.speed));
     setDescription(response.data.weather[0].description);
     setIcon(
       `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
     );
   }

   function handleSubmit(event) {
     event.preventDefault();
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c49eff189373b6b9c4fea0abf89e5033&units=metric`;
     axios.get(url).then(showTemperature);
   }
   function updateCity(event) {
     setCity(event.target.value);
   }
   let form = (
     <form onSubmit={handleSubmit}>
       <input
         type="search"
         placeholder="Search for city"
         autoFocus="on"
         onChange={updateCity}
         
       />
       <input type="submit" value="Search" className="btn btn-primary" />
     </form>
   );
   if (value) {
     return (
       <div className="currentWeather">
         <div classname="container">
           {form}
           <h3>{place}</h3>
           <ul className="currentWeather">
             <li>Temperature: {temperature}°C</li>
             <li>Description: {description}</li>
             <li>Humidity: {humidity} %</li>
             <li>Wind: {wind} m/s</li>
             <li>
               {" "}
               <img src={icon} alt="weather emoji" />
             </li>
           </ul>
         </div>
       </div>
     );
   } else {
     return form;
   }
}

export default App;
