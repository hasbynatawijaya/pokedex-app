import React from "react";
import { Card, Icon, Image, Grid, Segment } from "semantic-ui-react";

const PokeCard = ({ pokemon }) => {
  const renderedList = pokemon.map(poke => {
    let pokemonId = poke.url.split("/")[poke.url.split("/").length - 2];
    let pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    return (
      <Grid.Column mobile={16} tablet={4} computer={2}>
        <Card fluid image={pokemonImage} description={poke.name} link />
      </Grid.Column>
    );
  });
  return renderedList;
};

export default PokeCard;
