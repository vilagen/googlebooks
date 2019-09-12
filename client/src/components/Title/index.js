import React, { Component } from "react";
import Jumbotron from "../Jumbotron"

function Title(props){
        return (
					<Jumbotron>
						<h1 className="text-center">{props.title}</h1>
						<h2 className="text-center">{props.subtitle}</h2>
					</Jumbotron>
        )
      }


export default Title;