import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  function handleResponse(response){
    alert(`The weather in Madrid is ${response.data.main.temp}`)
  }
  let apiKey = "c49eff189373b6b9c4fea0abf89e5033";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}`; 
  axios.get(apiUrl).then(handleResponse)
  return (
    <div className="App">
     <h2> Hello world</h2>
    </div>
  );
}

export default App;
