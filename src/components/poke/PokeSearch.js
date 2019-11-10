import React, { Component } from "react";
import { Grid, Input, Dropdown } from "semantic-ui-react";
import _ from "lodash";

const pokeFilterOptions = [
  {
    key: "type",
    text: "Pokemon Type",
    value: "type"
  },
  {
    key: "ability",
    text: "Pokemon Ability",
    value: "ability"
  }
];

class PokeSearch extends Component {
  state = {
    typeTerm: "",
    filterType: ""
  };

  handleFilterPoke = (e, params) => {
    let value = e.target.value;

    setTimeout(() => {
      this.props.handleFilterPoke(params, value);
    }, 1000);
  };

  handleFilterType = (e, data) => {
    this.setState({
      filterType: data.value
    });
  };

  render() {
    const { filterType } = this.state;

    return (
      <Grid>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <Dropdown
            placeholder="Select Category"
            fluid
            selection
            options={pokeFilterOptions}
            onChange={this.handleFilterType}
          />
        </Grid.Column>
        {!_.isEmpty(filterType) && (
          <Grid.Column mobile={16} tablet={4} computer={4}>
            <Input
              onChange={e => this.handleFilterPoke(e, filterType)}
              fluid
              icon="search"
              placeholder={`Type Pokemon ${filterType} here....`}
            />
          </Grid.Column>
        )}
      </Grid>
    );
  }
}

export default PokeSearch;
