import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../../hoc/Layout/Layout";
import Login from "../../containers/Login/Login";
import LandingPage from "../../containers/LandingPage/LandingPage";

function App() {
	return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
        </Switch>
		  </Layout>
    </BrowserRouter>
		
	);
}

export default App;
