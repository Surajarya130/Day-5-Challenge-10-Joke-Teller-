const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", createJoke);

createJoke();

async function createJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        } 
    }
    const res = await fetch('https://icanhazdadjoke.com',config)
    const data =await res.json();
    jokeElement.innerText = data.joke;
}










// function createJoke(){
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         } 
//     }
//     fetch('https://icanhazdadjoke.com',config)
//     .then(res => res.json())
//     .then(data => {
//         jokeElement.innerHTML = data.joke;
//     })
// }