import React from "react";
import { Card, Icon, Image, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PokeCard = ({ pokemon }) => {
  const renderedList = pokemon.map(poke => {
    let pokemonId = poke.url.split("/")[poke.url.split("/").length - 2];
    let pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    return (
      <Grid.Column mobile={16} tablet={4} computer={2}>
        <Link to={`/poke/${pokemonId}`}>
          <Card fluid image={pokemonImage} description={poke.name} link />
        </Link>
      </Grid.Column>
    );
  });
  return renderedList;
};

export default PokeCard;
