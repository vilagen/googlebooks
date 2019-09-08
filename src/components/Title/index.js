import React, { Component } from "react";
import { Col, Row, Container } from "../Grid"; 
import Jumbotron from "../Jumbotron"

class Title extends Component {
    render() {
        return (
					<Jumbotron>
						<h1 className="text-center">Google Books Search</h1>
						<h2 className="text-center">Search and Save your Favorite Books!</h2>
					</Jumbotron>
        )
      }
    }

export default Title;