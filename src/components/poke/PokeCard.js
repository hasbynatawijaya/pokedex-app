import React from "react";
import { Card, Icon, Image, Grid, Segment } from "semantic-ui-react";

const PokeCard = ({ pokemon }) => {
  const renderedList = pokemon.map(poke => {
    return (
      <Grid.Column mobile={16} tablet={4} computer={2}>
        <Card
          fluid
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
          header={poke.name}
        />
      </Grid.Column>
    );
  });
  return renderedList;
};

export default PokeCard;
