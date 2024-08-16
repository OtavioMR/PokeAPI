document.addEventListener('DOMContentLoaded', function () {
    const pokemonUrls = [
        'https://pokeapi.co/api/v2/pokemon/gengar',
        'https://pokeapi.co/api/v2/pokemon/pikachu' // Substitua por outro Pokémon, se desejar
    ];

    Promise.all(pokemonUrls.map(url => fetch(url).then(response => response.json())))
        .then(pokemons => {
            const pokemonInfo1 = document.getElementById('pokemon-info');
            const pokemonInfo2 = document.getElementById('pokemon-info2');

            const html1 = `
                <div class="pokemon-card">
                    <h2>${pokemons[0].name.charAt(0).toUpperCase() + pokemons[0].name.slice(1)}</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[0].id}.png" alt="${pokemons[0].name}" class="pokemon-image">
                    <p><strong>ID:</strong> ${pokemons[0].id}</p>
                    <p><strong>Altura:</strong> ${pokemons[0].height / 10} m</p>
                    <p><strong>Peso:</strong> ${pokemons[0].weight / 10} kg</p>
                    <p><strong>Tipos:</strong> ${pokemons[0].types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                    <p><strong>Habilidades:</strong> ${pokemons[0].abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
                </div>
            `;

            const html2 = `
                <div class="pokemon-card">
                    <h2>${pokemons[1].name.charAt(0).toUpperCase() + pokemons[1].name.slice(1)}</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[1].id}.png" alt="${pokemons[1].name}" class="pokemon-image">
                    <p><strong>ID:</strong> ${pokemons[1].id}</p>
                    <p><strong>Altura:</strong> ${pokemons[1].height / 10} m</p>
                    <p><strong>Peso:</strong> ${pokemons[1].weight / 10} kg</p>
                    <p><strong>Tipos:</strong> ${pokemons[1].types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                    <p><strong>Habilidades:</strong> ${pokemons[1].abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
                </div>
            `;

            pokemonInfo1.innerHTML = html1;
            pokemonInfo2.innerHTML = html2;
        })
        .catch(error => {
            console.error('Erro ao buscar dados dos Pokémon:', error);
        });
});
