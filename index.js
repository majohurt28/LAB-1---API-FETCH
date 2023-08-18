
const Pokemons = document.getElementById('Pokemons');
const PokemonsEvo = document.getElementById('PokemonsEvo');

let UrlApi = 'https://pokeapi.co/api/v2/pokemon/';

 let pokemonList = [];
pokemonList.push(1);
pokemonList.push(4);
pokemonList.push(393);

let pokemonListname = [];



let Apiid = null;
let Evolution = null;


async function Getpoke(id){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    let data1 = await response.json();
    console.log(data1);

    Pokemons.innerHTML += `
    <div class="sheet-containercard">
    <img class="sheet" src="${data1.sprites.front_default}">
    <h1> ${data1.name}</h1>
    <h2> ${data1.weight}Kg</h2>
    </div>`;

}

async function Getevo(id){
    let response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
    let data2 = await response.json();
    console.log(data2);

    PokemonsEvo.innerHTML += `
    <div class="sheet-containercard">
    <img class="sheet" src="">
    <h1 id="titlepok">${data2.chain.evolves_to[0].species.name} </h1>
    </div>`;
}

async function Getpokemons(){
    for(let i=0 ; i<pokemonList.length; i++){
   await Getpoke(pokemonList[i])
   await Getevo(pokemonList[i])
    }}
Getpokemons();

/* async function Getevolutions(){
    for(let i=0 ; i<pokemonList.length; i++){
   await Getevo(pokemonList[i])
    }}
    Getevolutions();
 */

  /*   document.addEventListener('Change', function() {
        var button = document.createElement('input');
        button.type = 'button';
        button.id = 'Evolution';
        button.value = 'Submit';
        button.className = 'btn';

        button.onclick = function() {

        };

        var container = document.getElementById('container');
        container.appendChild(button);
    }, false);
 */

















/* function card (){
   let cardholder = document.getElementById("Pokemons")





};
 */



/*****2pt */


/*
 async function Getpokeapi(id){
       let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
       let data = await response.json();
       console.log(data);

       Pokemons.innerHTML += `<div id="Pokecard">
                <img id="Pokeimg" src="${data.sprites.front_default}">
                <h1> ${data.name}</h1>
            </div>`;
}

Getpokeapi( 1)


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
} */




