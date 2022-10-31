import React from "react";
import './assets/css/style.css'
import "assets/css/nucleo-icons.css";
import Navbar from 'Navbar.js'
export default function NoPage(){
return (
	<>
		<Navbar index={2} />
		<div  className="not-found-container">
			<img 
				alt="404 page not found"
				src={require("./assets/robots/404-robot.png")}
				/>
			<h1>PAGE NOT FOUND</h1>
		</div>
	</>
);
}