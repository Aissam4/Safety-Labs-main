import React, { useState } from "react";
import { BrowserRouter} from "react-router-dom";
import LandingPage from "LandingPage.js";
import { Switch, Route } from "react-router-dom";
import Pricing_page from "./pricing-page.js"
import NoPage from "NoPage.js";

export default function App()
{
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={LandingPage}></Route>
				<Route path='/pricing' component={Pricing_page}></Route>
				<Route exact path="*" component={NoPage}></Route>
			</Switch>
  		</BrowserRouter>
);}