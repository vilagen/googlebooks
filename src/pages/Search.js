import React, { Component } from "react";
import Title from "../components/Title";
import Results from "../components/Results";
import Input from "../components/Input";
import { Row, Col, Container } from "../components/Grid"
import Button from "../components/Button"

class Search extends Component {

	state = {
			books: [],
			bookSearch: "",
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
				[name]: value
		});
	};

	render() { 
			return ( 
				<div>
					<Title />

					<div className="my-3" />

					<Container>
						<div className="border my-2">
							<h5 className="m-3">Book Search</h5>
								<form className="mb-3 mx-3">
										<Input
											name="bookSearch"
											value={this.state.bookSearch}
											onChange={this.handleInputChange}
											placeholder="Search for a Book"
										/>
										<div className="d-flex flex-row-reverse">
										<Button>Search</Button>
										</div>
								</form>
						</div>
					</Container>

					<Results />

				</div>
		)
	}

}

export default Search;