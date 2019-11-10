import React from "react";
import Layout from "./layout/Layout";
import { Route, Switch } from "react-router-dom";
// import "../src/static/styles/styles.css";

import PokeList from "./poke/PokeList";
import PokeDetail from "./poke-detail/PokeDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={PokeList} />
        <Route
          exact
          path="/poke/:id"
          render={routeProps => <PokeDetail routeProps={routeProps} />}
        />
      </Switch>
    </Layout>
  );
}

export default App;
