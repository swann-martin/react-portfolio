import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/knowledges" component={Knowledges} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/NotFound" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
