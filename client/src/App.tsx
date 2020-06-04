import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import List from "./pages/List";
import { Detail } from "./pages/Detail";

import "./assets/style/reset.scss";

const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <Route exact path='/' component={List} />
        <Route path='/edit/:edit' component={Detail} />
      </Router>
    </Fragment>
  );
}

export default App;
