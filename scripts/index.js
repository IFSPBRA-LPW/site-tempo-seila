import {data} from "./data.js";

const dados = await data;
console.log(dados);
function renderBannerInfo(){

    const nome_comleto = `<h2>${dados.location.name}, ${dados.location.country}</h2>
                            <p class="date">${dados.location.localtime}</p>
    `;
    const local = document.getElementsByClassName("main-card-left");

    console.log(local[0]);
    local[0].innerHTML = nome_comleto;

}

function itemd() {


}

function  renderDayInfo() {

    const info = document.getElementsByClassName("detail-value");

    const sensação_termica = dados.current.feelslike_c;
    const umidade = dados.current.humidity;
    const vento = dados.current.wind_kph;
    const precipitação = dados.current.precip_mm;

    info[0].innerHTML = sensação_termica;
    info[1].innerHTML = umidade;
    info[2].innerHTML = vento;
    info[3].innerHTML = precipitação;

}

function renderDaily() {

    const date0 = new Date(dados.forecast.forecastday[0].date)
    
    daysCard = document.getElementsByClassName("day-card");

    daysCard[0] = `<p class="day-name">${dados.}</p>
                            <i class="fa-solid fa-wind icon-gray"></i>
                            <div class="temps">
                                <span class="high">24&deg;</span>
                                <span class="low">15&deg;</span>
    `;
    daysCard[1] =
    daysCard[2] =
    daysCard[3] =
    daysCard[4] =
    daysCard[5] =
    daysCard[6] =

    
}

function renderHourly() {

}

function main() {

    renderBannerInfo();
    renderDayInfo();

}

main()