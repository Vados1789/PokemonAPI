const app = document.querySelector('#root');
const logo = document.createElement('img');
const container = document.createElement('div');

container.setAttribute('class' ,'container');

app.appendChild(container);

const request = new XMLHttpRequest();

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', true)

request.onload = function(){
    const data = JSON.parse(this.response)
    console.log(data.sprites.front_default)

    const button = document.createElement('button')
    button.setAttribute('class', 'button')

    // button.onclick(window.open('https://google.com', '_blank'))


    const image = document.createElement('img')
    image.setAttribute("href", "https://google.com/")
    image.src=`${data.sprites.front_default}`
    button.appendChild(image)

    container.appendChild(button);
}

request.send()


// const getImage = async () => {
//
//
//     // const getUrlRequest = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=1154')
//
//     // const pokemonUrl = await getUrlRequest.json()
//
//
//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=1154', true)
//
//     console.log(request.onload)
//
//     request.send()
//     // const request = new XMLHttpRequest();
//     // request.open('GET', 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=1154', true)
//     // request.onload = async function () {
//     //     const data = JSON.parse(this.response)
//     //     const pokemonURL = data.results[1100].url
//     //     request.open('GET', pokemonURL, true)
//     //     request.onload = async function () {
//     //         const data = JSON.parse(this.response)
//     //         const pokemonIMG = data.sprites.front_default
//     //     }
//     //     request.send()
//     // }
//     // request.send()
//
//     // myValue = request.onreadystatechange();
//
//     // console.log(myValue)
// }
//
// getImage()
