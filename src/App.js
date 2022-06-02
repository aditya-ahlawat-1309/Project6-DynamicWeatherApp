import './App.css';
import {useState,useEffect} from "react";
import axios from 'axios';
function App() {

  const [city, setCity] = useState(null);
const [search,setSearch]  = useState("Mumbai");

const apiKey = "d7c904567594098688aa1466bfa5cf68";
    useEffect(() => {
     const fetchApi = async() => {
      const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        search +
        "&appid=" +
        apiKey;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      }
      fetchApi();
    },[search]);

  return (
    <div>
      <div className="box">
        <div className="wave" />
        <div className="wave-two" />
        <div className="wave-three" />
        <div id="weathercon">
          <i className="fas fa-sun" style={{ color: "#eccc68" }} />
        </div>
        <div className="info">
          <h3 className="location">
            <i className="fas fa-street-view" style={{ color: "#fff" }}></i>

            <form>
              <h6>City Name </h6>
              <input
                type="text"
                name="cityName"
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  backgroundColor: "white",
                  height: "25px",
                  width: "200px",
                  borderRadius: "25px",
                  borderColor: "white",
                  textTransform:"uppercase",

                }}
              />
            </form>
          </h3>
          {!city ? (
            <h1 className='temp'>No Data Found</h1>
          ) : (
            <div>
              <h1 className="temp">{search.toLocaleUpperCase()}</h1>
              <h1 className="temp">{(city.temp - 273).toFixed(2)} °C</h1>
              <h3 className="tempmin_max">
                Min: {(city.temp_min - 273).toFixed(2)}°C | Max :{" "}
                {(city.temp_max - 273).toFixed(2)}°C
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
