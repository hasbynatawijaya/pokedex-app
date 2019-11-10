import React, { Component } from "react";
import PokeCard from "./PokeCard";
import PokeSearch from "./PokeSearch";
import { Grid, Segment } from "semantic-ui-react";
import pokelist from "../../apis/pokeAPI";
import _ from "lodash";

class PokeList extends Component {
  state = { pokemon: [], error: false };

  componentDidMount() {
    this.getPokemon("initial", "/pokemon");
  }

  getPokemon = async (loadType, url) => {
    pokelist
      .get(url, {})
      .then(res => {
        if (loadType === "initial") {
          this.setState({
            pokemon: res.data.results,
            error: false
          });
        } else {
          let pokemon = [];
          _.forEach(res.data.pokemon, (value, key) => {
            pokemon.push({
              name: value.pokemon.name,
              url: value.pokemon.url
            });
          });

          this.setState({
            pokemon: pokemon,
            error: false
          });
        }
      })
      .catch(err => {
        this.setState({
          pokemon: [],
          error: true
        });
      });
  };

  handleFilterPoke = async (filterType, term) => {
    if (_.isEmpty(term)) {
      this.getPokemon("initial", "/pokemon");
    } else {
      this.getPokemon("filter", `/${filterType}/${term}`);
    }
  };

  handleRender() {
    const { pokemon, error } = this.state;

    if (_.isEmpty(pokemon) && !error) {
      return "loading...";
    } else if (_.isEmpty(pokemon) && error) {
      return "error...";
    }

    return (
      <Grid>
        <PokeCard pokemon={pokemon} />
      </Grid>
    );
  }

  render() {
    return (
      <div>
        <Segment inverted secondary color="blue">
          <h2>Filter your Pokemon</h2>
          <PokeSearch handleFilterPoke={this.handleFilterPoke} />
        </Segment>
        <Segment inverted secondary color="red">
          {this.handleRender()}
        </Segment>
      </div>
    );
  }
}

export default PokeList;
