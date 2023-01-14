const jokeButton = document.querySelector("#getjoke");
const jokeArea = document.querySelector("#jokearea");
const baseURL = "https://icanhazdadjoke.com";

jokeButton.addEventListener('click', async () => {
    const reqConfig = { 'headers': { 'Accept': 'application/json' } }
    const response = await axios.get(baseURL, reqConfig);
    jokeArea.innerText = response.data.joke;
})