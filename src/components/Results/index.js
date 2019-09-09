import React, { Component } from "react";
import {Row, Container } from "../Grid";
import ResultBox from "../ResultBox";

class Results extends Component {
		render() {
			return (
				<Row>
					<Container>
							<div className="border">
							<h5 className="m-3">Results</h5>
							<ResultBox></ResultBox>
							</div>
					</Container>
				</Row>
			)
	}
}

export default Results;