import { fetchWeather } from "./data.js"

export function form() {
    input = document.getElementById("input")
    button = document.getElementById("search-btn")

    button.addEventListener('click', () =>{

        const search = input.value.trim()
        fetchWeather(search)
    }
    )
}
