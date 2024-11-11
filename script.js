let btn = document.querySelector(".btn");
let jokeField = document.querySelector(".joke-field")
let loader = document.querySelector(".loader")

const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = async () =>{
    jokeField.innerHTML = ""
    loader.style.display = "block";
    console.log('data fetching....')
    let response = await fetch(URL)
    console.log(response)
    let data = await response.json()
    loader.style.display = "none"
    jokeField.innerHTML = data.joke
}
btn.addEventListener('click',getJoke)

