
const Pokemons = document.getElementById('Pokemons');

let UrlApi = 'https://pokeapi.co/api/v2/pokemon/';



async function Getpokeapi(url){
       let response = await fetch(url);
       let data = await response.json();
       console.log(data);

       Pokemons.innerHTML += `<div id="Pokecard">
                <img id="Pokeimg" src="${data.sprites.front_default}">
                <h1> Name: ${data.name}</h1>
            </div>`;
}


let pokemonList = [];
pokemonList.push(1);
pokemonList.push(4);
pokemonList.push(393);

async function Getpokemon (){
    for(let i=0 ; i<pokemonList.length ; i++){
        let url = UrlApi + pokemonList[i];
        console.log(url);
        await Getpokeapi(url);
    }
}


function card (){}

Getpokemon();

