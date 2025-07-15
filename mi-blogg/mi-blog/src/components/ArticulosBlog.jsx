import React, { useEffect, useState } from "react";
import './ArticulosBlog.css';


export default function ArticulosBlog() {
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(res => {
                if (!res.ok) throw new Error("Error al obtener el pokemon");
                return res.json();
            })
            .then(data => setPokemon(data))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <h1>Cargando Pokémon...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
        <div className="articulos">
            <h2>Información del Pokémon</h2>
            <div className="card" key={pokemon.id}>
                <h3>{pokemon.name}</h3>
                <p>Tipo: {pokemon.types.map(t => t.type.name).join(", ")}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
        </div>
    );
}