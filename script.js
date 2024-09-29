document.addEventListener("DOMContentLoaded", () => {
    const joke = document.querySelector("#joke");
    const btn = document.querySelector("#btn");
    const container = document.querySelector("#container");

    const jokeUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    const unsplashUrl = "https://api.unsplash.com/photos/random?client_id=jxOSgvbjJKLpwnucVP7ntrXeEMcMC3SrJAIDi_1Gv_o&query=nature&orientation=landscape";

    const fetchJoke = async () => {
        try {
            const response = await fetch(jokeUrl);
            const data = await response.json();
            joke.innerHTML = data.joke;
            fetchBackground();
        } catch (error) {
            joke.innerHTML = "Oops! Something went wrong. Please try again.";
        }
    };

    const fetchBackground = async () => {
        try {
            const response = await fetch(unsplashUrl);
            const data = await response.json();
            container.style.backgroundImage = `url(${data.urls.regular})`;
        } catch (error) {
            console.error("Error fetching background image:", error);
        }
    };

    btn.addEventListener("click", fetchJoke);

    // Initial background fetch
    fetchBackground();
});
