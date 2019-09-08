import React, { Component } from "react";
import { Col, Row, Container } from "../Grid"; 
import Jumbotron from "../Jumbotron"

class Title extends Component {
    render() {
        return (
            <Row>
                <Col size ="md-3"></Col>
                    <Col size ="md-6">
                        <Jumbotron>
                            <h1 className="text-center">Google Books Search</h1>
                            <h2 className="text-center">Search and Save your Favorite Books!</h2>
                        </Jumbotron>
                    </Col>
                <Col size ="md-3"></Col>
            </Row>
            )
        }
    }

export default Title;