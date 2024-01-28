import PokemonCard from "./PokemonCard";

const PokemonList = ({pokemons}) => {
    return (
        <div className="PokemonList">
            { pokemons.map((pokemon) => {
                return <PokemonCard 
                    name={pokemon.name} 
                    key={pokemon.name} 
                    image={pokemon.sprites.front_default} 
                />;
            })}
        </div>
    );
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), //propiedad por edfecto de la lista un array de 10 posiciones vacias
};


export default PokemonList;