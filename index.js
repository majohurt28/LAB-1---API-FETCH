async function Getpokeapi() {
    try{
       const response = await fetch('https://pokeapi.co/api/v2/pokemon');
       const data = await response.json();
       console.log(data);
    }catch (error) {
        console.error(error);
    }
}

Getpokeapi();

let Url ='https://pokeapi.co/api/v2/pokemon';

let pokemonList = [];
pokemonList.push(1);
pokemonList.push(4);
pokemonList.push(393);

async function Getpokemon (){
    for(let i=0; i<pokemonList)
}
