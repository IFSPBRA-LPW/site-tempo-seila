import { fetchWeather } from "./data.js"

export function form(onSearchSuccess) {
    const input = document.getElementById("input")
    const button = document.getElementById("search-btn")

    button.addEventListener('click', async () => {

        const search = input.value.trim()
        if (search) {
            const newData = await fetchWeather(search)
            onSearchSuccess(newData)
        }
    })
}
