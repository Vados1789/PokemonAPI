const random = document.querySelector('#root3');
const randomContainer = document.createElement('div');
const randomApp = document.querySelector('#root3');
random.appendChild(randomContainer);
randomContainer.setAttribute('class', 'randomContainer')

const randomNumber = Math.floor(Math.random() * 100) + 1;
const urlWithPokemonName = 'https://pokeapi.co/api/v2/pokemon/' + randomNumber;

const requestWithName = new XMLHttpRequest();
requestWithName.open('GET', urlWithPokemonName, true)

requestWithName.onload = function () {
    randomApp.appendChild(randomContainer)

    const pokemon = JSON.parse(this.response)

    const button = document.createElement('button')
    button.setAttribute('class', 'button')
    button.setAttribute('class', 'big')
    button.setAttribute('id', pokemon.id)
    button.setAttribute('name', pokemon.name)
    button.setAttribute('weight', pokemon.weight)

    const headline = document.createElement('div')
    headline.innerText = pokemon.name
    headline.setAttribute('class', 'title')

    const weight = document.createElement('div')
    weight.innerText = `Weight: ${pokemon.weight}`
    weight.setAttribute('class', 'title')

    const image = document.createElement('img')
    image.src = `${pokemon.sprites.front_default}`

    button.appendChild(image)
    button.appendChild(headline)
    button.appendChild(weight)

    randomContainer.appendChild(button);
}

requestWithName.send();