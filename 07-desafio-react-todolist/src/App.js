import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import Add from "./routes/Add";
import Edit from "./routes/Edit";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  
padding:0;
margin:0;
text-decoration: none;
font-family:'Roboto', sans-serif

}
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/Add" component={Add} />
        <Route exact path="/Edit/:id" component={Edit} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
