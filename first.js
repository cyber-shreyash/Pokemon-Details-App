
const input = document.getElementById("entry");
const image = document.getElementById("pokeimg");
const typeEl = document.getElementById("type");
const abilityEl = document.getElementById("ability");
const nameEl = document.getElementById("pokename");
const URL = "https://pokeapi.co/api/v2/pokemon/";
async function fetchpokemon(pokemonName) {
    try {
        let response = await fetch(`${URL}${pokemonName.toLowerCase()}`);
        if (!response.ok) {
            throw new Error("Pokémon not found!");
        }
        let data = await response.json();
        nameEl.textContent = data.name.toUpperCase();

        image.src = data.sprites.other["official-artwork"].front_default;

        typeEl.textContent = "Type : "+data.types[0].type.name;

        abilityEl.textContent = "Ability :"+data.abilities[1].ability.name;
    }
    catch (error) {
        alert(error.message);
    }
}
document.getElementById("enter").addEventListener("click", () => {
    const pokemonName = input.value.trim();
    if (pokemonName) {
        fetchpokemon(pokemonName);}
});