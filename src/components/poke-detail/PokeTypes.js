import React from "react";
import { Segment, Header, Divider } from "semantic-ui-react";

const PokeTypes = ({ pokemon }) => {
  const renderedList = pokemon.types.map(poke => {
    return <Segment>{poke.type.name}</Segment>;
  });
  return (
    <Segment inverted secondary color="orange">
      <Header as="h4">
        <Header.Content>Pokemon Types</Header.Content>
      </Header>
      <Divider />
      {renderedList}
    </Segment>
  );
};

export default PokeTypes;
