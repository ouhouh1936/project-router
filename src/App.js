import React from "react";
import Navigation from "./Layouts/Navigation";
import { Route } from "react-router-dom";
import Oeh from "./screen/Oeh";
import Min from "./screen/Min";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Navigation} />
        <Route exact path="/oeh" component={Oeh} />
        <Route exact path="/min" component={Min} />
      </div>
    );
  }
}
export default App;
