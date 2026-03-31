import {data} from "./data.js";
import { form } from "./validateForm.js";

const dados = await data;
console.log(dados);
function renderBannerInfo(){

    const nome_comleto = `<h2>${dados.location.name}, ${dados.location.country}</h2>
                            <p class="date">${dados.location.localtime}</p>
    `;
    const local = document.getElementsByClassName("main-card-left");

    const temperatura = document.getElementsByClassName("temperature");

    const image = document.getElementsByClassName("icone");

    local[0].innerHTML = nome_comleto;
    temperatura[0].innerHTML = `${Math.round(dados.current.temp_c)}&deg`;
    image[0].innerHTML = `<img src=${dados.current.condition.icon} alt=${dados.current.condition.text}>`

}

function  renderDayInfo() {

    const info = document.getElementsByClassName("detail-value");

    const sensação_termica = Math.round(dados.current.feelslike_c);
    const umidade = dados.current.humidity;
    const vento = dados.current.wind_kph;
    const precipitação = dados.current.precip_mm;

    info[0].innerHTML = sensação_termica;
    info[1].innerHTML = umidade;
    info[2].innerHTML = vento;
    info[3].innerHTML = precipitação;

}

function renderDaily() {

    const date0 = new Date(dados.forecast.forecastday[0].date);
    const date1 = new Date(dados.forecast.forecastday[1].date);
    const date2 = new Date(dados.forecast.forecastday[2].date);
    const date3 = new Date(dados.forecast.forecastday[3].date);
    const date4 = new Date(dados.forecast.forecastday[4].date);
    const date5 = new Date(dados.forecast.forecastday[5].date);
    const date6 = new Date(dados.forecast.forecastday[6].date);

    const dias = ["ter", "qua", "qui", "sex", "sab", "dom", "seg"];

    let dia0 = dias[date0.getDay()];
    let dia1 = dias[date1.getDay()];
    let dia2 = dias[date2.getDay()];
    let dia3 = dias[date3.getDay()];
    let dia4 = dias[date4.getDay()];
    let dia5 = dias[date5.getDay()];
    let dia6 = dias[date6.getDay()];

    
    const daysCard = document.getElementsByClassName("day-card");
    console.log(dados.forecast.forecastday[0].day.maxtemp_c);

    daysCard[0].innerHTML = `<p class="day-name">${dia0}</p>
                            <i class=icone><img src=${dados.forecast.forecastday[0].day.condition.icon}></i>
                            <div class="temps">
                                <span class="high">${Math.round(dados.forecast.forecastday[0].day.maxtemp_c)}&deg;</span>
                                <span class="low">${Math.round(dados.forecast.forecastday[0].day.mintemp_c)}&deg;</span>
                            </div>
    `;
    daysCard[1].innerHTML = `<p class="day-name">${dia1}</p>
                            <i class="fa-solid fa-cloud-showers-heavy icon-blue"></i>
                            <div class="temps">
                                <span class="high">${Math.round(dados.forecast.forecastday[1].day.maxtemp_c)}&deg;</span>
                                <span class="low">${Math.round(dados.forecast.forecastday[1].day.mintemp_c)}&deg;</span>
                            </div>
    `;
    daysCard[2].innerHTML = `<p class="day-name">${dia2}</p>
                            <i class="fa-solid fa-cloud-showers-heavy icon-blue"></i>
                            <div class="temps">
                                <span class="high">${Math.round(dados.forecast.forecastday[2].day.maxtemp_c)}&deg;</span>
                                <span class="low">${Math.round(dados.forecast.forecastday[2].day.mintemp_c)}&deg;</span>
                            </div>
    `;
   daysCard[3].innerHTML = `<p class="day-name">${dia3}</p>
                            <i class="fa-solid fa-cloud-showers-heavy icon-blue"></i>
                            <div class="temps">
                                <span class="high">${Math.round(dados.forecast.forecastday[3].day.maxtemp_c)}&deg;</span>
                                <span class="low">${Math.round(dados.forecast.forecastday[3].day.mintemp_c)}&deg;</span>
                            </div>
    `;
   daysCard[4].innerHTML = `<p class="day-name">${dia4}</p>
                            <i class="fa-solid fa-cloud-showers-heavy icon-blue"></i>
                            <div class="temps">
                                <span class="high">${dados.forecast.forecastday[4].day.maxtemp_c}&deg;</span>
                                <span class="low">${Math.round(dados.forecast.forecastday[4].day.mintemp_c)}&deg;</span>
                            </div>
    `;
   daysCard[5].innerHTML = `<p class="day-name">${dia5}</p>
                            <i class="fa-solid fa-cloud-showers-heavy icon-blue"></i>
                            <div class="temps">
                                <span class="high">${Math.round(dados.forecast.forecastday[5].day.maxtemp_c)}&deg;</span>
                                <span class="low">${Math.round(dados.forecast.forecastday[5].day.mintemp_c)}&deg;</span>
                            </div>
    `;
   daysCard[6].innerHTML = `<p class="day-name">${dia6}</p>
                            <i class="fa-solid fa-cloud-showers-heavy icon-blue"></i>
                            <div class="temps">
                                <span class="high">${Math.round(dados.forecast.forecastday[6].day.maxtemp_c)}&deg;</span>
                                <span class="low">${Math.round(dados.forecast.forecastday[6].day.mintemp_c)}&deg;</span>
                            </div>
    `;

    
}

function renderHourly() {
    const hourlyData = dados.forecast.forecastday
    const hourlyList = document.querySelector(".hourly-list");
    hourlyList.innerHTML = "";

    const hours = hourlyData[0].hour;

    hours.forEach(hourInfo => { // nn usei isso antes pois nn sabia, so descobri a uns 3 dias atras, e to com preguiça de refazer
        const hourlyItem = document.createElement("div");
        hourlyItem.classList.add("hourly-item");

        const time = getHour(hourInfo.time);
        const temp = Math.round(hourInfo.temp_c);
        const iconSrc = hourInfo.condition.icon;

        hourlyItem.innerHTML = `
            <div class="time-weather">
                <i><img src="${iconSrc}" alt="icone hora"></i>
                <span>${time}</span>
            </div>
            <span class="temp">${temp}&deg;</span>
        `;

        hourlyList.appendChild(hourlyItem);
    });
}

function main() {

    renderBannerInfo();
    renderDayInfo();
    renderDaily();
    renderHourly();
    form();


}

main()
