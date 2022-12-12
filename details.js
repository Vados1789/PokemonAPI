const details = document.querySelector('#root1');
const detailsContainer = document.createElement('div');
const detailsApp = document.querySelector('#root1');
const id = document.createElement('div')

details.appendChild(detailsContainer);
detailsContainer.setAttribute('class', 'detailsContainer')

const pokemonURL = sessionStorage.getItem("selectedPokemon");
console.log(pokemonURL);

const pokemonRequest = new XMLHttpRequest();
pokemonRequest.open('GET', pokemonURL, true)

pokemonRequest.onload = function () {
    detailsApp.appendChild(detailsContainer)

    const pokemon = JSON.parse(this.response)
    console.log('Pokemon is', pokemon)

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
    image.src=`${pokemon.sprites.front_default}`

    button.appendChild(id)
    button.appendChild(image)
    button.appendChild(headline)
    button.appendChild(weight)

    detailsContainer.appendChild(button);
}
pokemonRequest.send()

