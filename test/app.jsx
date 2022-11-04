function Pokemon({pokemon}){
return (<div className="pokemon">
<h3 className="pokemon-name">{pokemon.name}</h3>
<img src={pokemon.image} alt={pokemon.name} />
<div>{pokemon.type}</div>
</div>)
}
// const PokemonType =PropTypes.exact({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     type: PropTypes.string,
//     image: PropTypes.string,
// })

// Pokemon.propTypes={
//     pokemon:PokemonType
// }

function PokemonList({pokemons}){

// const list=pokemons.map(pokemon=><Pokemon pokemon={pokemon}/>)
return <div>
  {
    pokemons.map(pokemon=>
        (<div className="pokemon">
        <h3 className="pokemon-name">{pokemon.name}</h3>
        <img src={pokemon.image} alt={pokemon.name} />
        <div>{pokemon.type}</div>
        </div>)
    )
  }
</div>
}
// PokemonList.propTypes={
//     pokemons:PropTypes.arrayOf(PokemonType)
// }
function PokemonApp(){
    const pokemons=[
        {
          id: 1,
          name: "Charmander",
          type: "fire",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
          id: 2,
          name: "Squirtle",
          type: "water",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
          id: 3,
          name: "Butterfree",
          type: "flying",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        },
        {
          id: 4,
          name: "Rattata",
          type: "normal",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
        },
        {
          id: 5,
          name: "Metapod",
          type: "bug",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
        }
      ]

      return (
        <div>
            <PokemonList pokemons={pokemons}/>
        </div>
      )
}
const root=ReactDOM.createRoot(document.querySelector("#app"))
root.render(PokemonApp())