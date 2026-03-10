import {cityWeather} from "./data.js"

console.log(cityWeather)

function renderBannerInfo(){

    const nome_comleto = `<h2>${cityWeather.city}, ${cityWeather.country}</h2>
                            <p class="date">${cityWeather.date}</p>
    `;
    const local = document.getElementsByClassName("main-card-left");

    console.log(local[0])
    local[0].innerHTML = nome_comleto

}

function itemd() {


}

function  renderDayInfo() {

    const info = document.getElementsByClassName("detail-value");

    const sensação_termica = cityWeather.feelsLike
    const umidade = cityWeather.humidity
    const vento = cityWeather.wind
    const precipitação = cityWeather.precipitation

    info[0].innerHTML = sensação_termica
    info[1].innerHTML = umidade
    info[2].innerHTML = vento
    info[3].innerHTML = precipitação

}

function renderDaily() {

    daysCard = document.getElementsByClassName("day-card")
    
}

function renderHourly() {

}

function main() {

    renderBannerInfo();

}

main()