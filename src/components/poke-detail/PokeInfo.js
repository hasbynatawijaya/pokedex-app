import React from "react";
import { Segment, Header, Divider, Statistic } from "semantic-ui-react";
const PokeInfo = ({ pokemon }) => {
  return (
    <div>
      <Segment inverted secondary color="blue">
        <Header as="h4">
          <Header.Content>Pokemon Basics Info</Header.Content>
        </Header>
        <Divider />
        <Statistic.Group size="mini" inverted>
          <Statistic>
            <Statistic.Value>Height</Statistic.Value>
            <Statistic.Label>{pokemon.height}</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>Weight</Statistic.Value>
            <Statistic.Label>{pokemon.weight}</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>Experience</Statistic.Value>
            <Statistic.Label>{pokemon.base_experience}</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    </div>
  );
};

export default PokeInfo;
