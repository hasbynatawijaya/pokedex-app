import React, { Component } from "react";
import {
  Header,
  Segment,
  Divider,
  Grid,
  Image,
  Statistic
} from "semantic-ui-react";
import pokeDetail from "../../apis/pokeAPI";
import PokeFunny from "./PokeFunny";
import PokeInfo from "./PokeInfo";
import PokeTypes from "./PokeTypes";
import _ from "lodash";

class PokeDetail extends Component {
  state = { pokemon: {}, error: false };

  componentDidMount() {
    const { match } = this.props.routeProps;
    this.getPokemon(match.params.id);
  }

  getPokemon = async id => {
    pokeDetail
      .get(`/pokemon/${id}`)
      .then(res => {
        this.setState({
          pokemon: res.data
        });
      })
      .catch(err => {});
  };

  handleRender() {
    //padd id with format 000 for nicer images

    let pokemonId = this.props.routeProps.match.params.id.padStart(3, 0);
    let pokemonImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`;

    const { pokemon } = this.state;

    if (_.isEmpty(this.state.pokemon)) {
      return "loading...";
    }

    return (
      <div>
        <Header as="h2">
          <Header.Content>{pokemon.name}</Header.Content>
          <Divider />
        </Header>
        <Grid verticalAlign="middle">
          <Grid.Column mobile={16} tablet={4} computer={4}>
            <Image fluid bordered src={pokemonImage} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={12}>
            <Grid>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <PokeInfo pokemon={pokemon} />
                <PokeTypes pokemon={pokemon} />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <PokeFunny pokemon={pokemon} />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Segment>{this.handleRender()}</Segment>
      </div>
    );
  }
}

export default PokeDetail;
