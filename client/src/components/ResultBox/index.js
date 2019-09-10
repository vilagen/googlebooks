import React, {Component} from "react";
import {Row, Col, Container} from "../Grid";
import Button from "../Button";
import "./style.css"

class ResultBox extends Component {
	render() {
			return (
				<Container>
					<div className="border">
						<div className="d-flex justify-content-between">
							<h5 className="m-3">Title</h5>
								<section>
										
										<Button
										type="primary"
										>
											View
										</Button>

										<Button
										type="primary"
										>
											Save
										</Button>

								</section>    
						</div>
						<p className="ml-3">Author of Book</p>
						<Row>
							<Col size="xs-4 sm-2">
									<img className="test m-3" src="/images/harrypotter.jpg" />
							</Col>
							<Col size="xs-8 sm-9">
									<p>Ingredients are super effective and awesome. I mean, I really hope that I can
											keep this paragraph wrapped around the stupid thing.
									</p>
							</Col>
						</Row>
					</div>
				</Container>
			)
	}
}

// this.onSumbit = this.onSumbit.bind(this)
// onSubmit = (e) => { console.log(this)} or something like:
// onSubmit = (e) => { alert(this.state.inputValue) } 

export default ResultBox;