import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";

import LandingPage from "LandingPage.js";
import { Switch, Route } from "react-router-dom";
import Pricing_page from "./pricing-page.js"
import NoPage from "NoPage.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
		<Switch>
			<Route exact path='/' component={LandingPage}></Route>
			<Route exact path='/pricing' component={Pricing_page}></Route>
			<Route exact path="*" component={NoPage}></Route>
    	</Switch>
  </BrowserRouter>
);
