const { default: axios } = require("axios")

const getPokemons = async () => {
    const pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon'
    const pokemonList = await axios.get(pokemonListUrl).then(res => { 
        Promise.all(res.data.results.map(pokemon => axios.get(pokemon.url))).then(responses => responses.map(res => console.log(res.data.weight))) 
    })
    // const promises = Promise.all(pokemonList.map(pokemon => {
    //     axios.get(pokemon.url)
    // }))

    //return Promise.all([axios.get('https://pokeapi.co/api/v2/pokemon/7/'), axios.get('https://pokeapi.co/api/v2/pokemon/8/')])
    //return promises
    return pokemonList
}

getPokemons()//.then(responses => responses.map(res => console.log(res.data.weight)))
