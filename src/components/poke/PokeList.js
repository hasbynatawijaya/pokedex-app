import React, { Component } from "react";
import PokeCard from "./PokeCard";
import { Grid } from "semantic-ui-react";
import pokelist from "../../apis/pokelist";

class PokeList extends Component {
  state = { pokemon: [] };

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = async () => {
    const res = await pokelist.get();

    this.setState({
      pokemon: res.data.results
    });
  };

  render() {
    const { pokemon } = this.state;

    return (
      <Grid>
        <PokeCard pokemon={pokemon} />
      </Grid>
    );
  }
}

export default PokeList;
