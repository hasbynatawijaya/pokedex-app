import React from "react";
import { Segment, Header, Image, Divider } from "semantic-ui-react";

const PokeFunny = ({ pokemon }) => {
  return (
    <div>
      <Segment inverted color="grey">
        <Header as="h4">
          <Header.Content>Pokemon Funny</Header.Content>
        </Header>
        <Divider />
        <Image.Group size="tiny">
          <Image fluid circular src={pokemon.sprites.back_default} />
          <Image fluid circular src={pokemon.sprites.back_shiny} />
          <Image fluid src={pokemon.sprites.front_default} />
          <Image fluid src={pokemon.sprites.front_shiny} />
        </Image.Group>
      </Segment>
    </div>
  );
};

export default PokeFunny;
