import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../../hoc/Layout/Layout";
import Login from "../../containers/Login/Login";
import LandingPage from "../../containers/LandingPage/LandingPage";
import AdminDashboard from "../../containers/AdminDashboard/AdminDashboard";
import AdminAnalytics from "../../containers/AdminAnalytics/AdminAnalytics";

function App() {
	return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/admin" exact component={AdminDashboard} />
          <Route path="/admin/analytics" component={AdminAnalytics} />
        </Switch>
		  </Layout>
    </BrowserRouter>
		
	);
}

export default App;
