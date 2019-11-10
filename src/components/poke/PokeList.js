import React, { Component } from "react";
import PokeCard from "./PokeCard";
import PokeSearch from "./PokeSearch";
import { Grid, Segment, Button } from "semantic-ui-react";
import pokelist from "../../apis/pokeAPI";
import _ from "lodash";

class PokeList extends Component {
  state = { pokemon: [], next: null, error: false };

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
            next: res.data.next,
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
            error: false,
            next: null
          });
        }
      })
      .catch(err => {
        this.setState({
          pokemon: [],
          error: true,
          next: null
        });
      });
  };

  getMorePokemon = () => {
    const { next } = this.state;
    const pokemon = [...this.state.pokemon];

    let url = next.split("?")[1];

    pokelist
      .get(`/pokemon?${url}`, {})
      .then(res => {
        this.setState({
          pokemon: pokemon.concat(res.data.results),
          next: res.data.next,
          error: false
        });
      })
      .catch(err => {
        this.setState({
          pokemon: [],
          error: true,
          next: null
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
    const { pokemon, error, next } = this.state;

    let loadMore = (
      <div style={{ marginTop: "30px" }}>
        <Button fluid color="yellow" onClick={this.getMorePokemon}>
          Load more pokemon
        </Button>
      </div>
    );

    if (next === null) {
      loadMore = null;
    }

    if (_.isEmpty(pokemon) && !error) {
      return "loading...";
    } else if (_.isEmpty(pokemon) && error) {
      return "Data not found";
    }

    return (
      <div>
        <Grid>
          <PokeCard pokemon={pokemon} />
        </Grid>
        {loadMore}
      </div>
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
