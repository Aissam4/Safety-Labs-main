import React from "react";
import 'style.css'
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";

export default function NoPage(){
return (
	<div  className="not-found-container">
		<img
            alt="404 page not found"
            src={require("404-robot.png")}
          />
		  <h1>PAGE NOT FOUND</h1>
    </div>
);
}