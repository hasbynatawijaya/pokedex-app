import React from "react";
import Layout from "./layout/Layout";
import { Route, Switch } from "react-router-dom";
// import "../src/static/styles/styles.css";

import PokeList from "./poke/PokeList";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={PokeList} />
      </Switch>
    </Layout>
  );
}

export default App;
