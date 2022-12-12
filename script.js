const app = document.querySelector('#root');
const container = document.createElement('div');
const wrapper = document.createElement('div');
const id = document.createElement('div')
let countPokemonInput; // count how many pokemon will be in a index page
let allPokemons = []; // use it for Search pokemon

// for searching
const searchInput = document.querySelector("[data-search]")

function getPokemon(name) {
    const urlWithPokemonName = 'https://pokeapi.co/api/v2/pokemon/' + name;

    const requestWithName = new XMLHttpRequest();
    requestWithName.open('GET', urlWithPokemonName, true)

    requestWithName.onload = function () {
        app.appendChild(container)

        const pokemon = JSON.parse(this.response)

        const button = document.createElement('button')
        button.setAttribute('class', 'button')
        button.setAttribute('id', pokemon.id)
        button.setAttribute('name', pokemon.name)
        button.setAttribute('weight', pokemon.weight)
        // button.setAttribute("href", "./details.html")

        const headline = document.createElement('div')
        headline.innerText = pokemon.name
        headline.setAttribute('class', 'title')

        const weight = document.createElement('div')
        weight.innerText = `Weight: ${pokemon.weight}`
        weight.setAttribute('class', 'title')

        const image = document.createElement('img')
        image.src=`${pokemon.sprites.front_default}`

        allPokemons.push(pokemon);

        container.appendChild(wrapper)
        wrapper.appendChild(button)
        button.appendChild(id)
        button.appendChild(image)
        button.appendChild(headline)
        button.appendChild(weight)

        button.setAttribute("href", 'https://pokeapi.co/api/v2/pokemon/' + name)

        // Open page datails.html
        button.onclick = function(e)
        {
            let pokemonID = e.currentTarget.id
            const localUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
            sessionStorage.setItem("selectedPokemon", localUrl);
            document.location.href = "file:/C:/Projects/C%23/PokemonAPI/details.html";
        }

        // Searching
        searchInput.addEventListener("input", (e) => {
            let value = e.target.value
            for(let i = 0; i < allPokemons.length; i++) {
                if (!allPokemons[i].name.includes(value)) {
                    document.getElementById(allPokemons[i].id).style.display = 'none';
                } else {
                    document.getElementById(allPokemons[i].id).style.display = 'block';
                }
            }
        })
        container.appendChild(button);
    }
    requestWithName.send();
}

// reaction on press by button "Submit count of pokemon"
function showPokemon(){
    for (let i = 1; i < countPokemonInput + 1 ; i++) {
        getPokemon(i);
    }
}

// count of pokemon
const countInput = document.querySelector("[count-pokemon]")
container.setAttribute('class' ,'container');
app.appendChild(container);
const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/777', true)

request.onload = function(){
    app.appendChild(container)
    // Count of pokemon
    countInput.addEventListener("input", (e) => {
        countPokemonInput = Number(e.target.value)
    })
}
request.send()


