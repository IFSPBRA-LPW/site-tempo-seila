import {API_KEY} from "./config.js";

async function fetchWeather(city) { 
const response = await fetch( 
`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&lang=pt`, 
); 
if (!response.ok) { 
throw new Error("Erro ao buscar dados da API"); 
} 
return response.json(); 
} 

export const data = fetchWeather("rio-de-janeiro")

// {
    // "location": {
//        "name": "Rio De Janeiro",
//        "region": "Rio de Janeiro",
//        "country": "Brazil",
//        "lat": -22.9,
//        "lon": -43.2333,
//        "tz_id": "America/Sao_Paulo",
//        "localtime_epoch": 1773771564,
//        "localtime": "2026-03-17 15:19"
//    },
//    "current": {
//        "last_updated_epoch": 1773771300,
//        "last_updated": "2026-03-17 15:15",
//        "temp_c": 29.4,
//        "temp_f": 84.9,
//        "is_day": 1,
//        "condition": {
//            "text": "Sunny",
 //           "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
//            "code": 1000
//        },
   //     "wind_mph": 9.2,
   //     "wind_kph": 14.8,
   //     "wind_degree": 126,
   //     "wind_dir": "SE",
    //    "pressure_mb": 1011.0,
    //    "pressure_in": 29.85,
  //      "precip_mm": 0.0,
  //      "precip_in": 0.0,
 //       "humidity": 70,
 //       "cloud": 25,
 //       "feelslike_c": 32.2,
 //       "feelslike_f": 90.0,
 //       "windchill_c": 28.1,
 //       "windchill_f": 82.6,
 //       "heatindex_c": 30.1,
 //       "heatindex_f": 86.1,
 //       "dewpoint_c": 20.0,
 //       "dewpoint_f": 68.0,
//        "vis_km": 10.0,
//        "vis_miles": 6.0,
//        "uv": 4.5,
//        "gust_mph": 10.6,
//        "gust_kph": 17.1,
//        "short_rad": 863.09,
//        "diff_rad": 145.17,
//        "dni": 57954.5,
//        "gti": 1172.69
//    }
// }