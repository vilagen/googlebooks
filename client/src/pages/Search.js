import React, { Component } from "react";
import Title from "../components/Title";
import Results from "../components/Results";
import Input from "../components/Input";
import { Container } from "../components/Grid"
import Button from "../components/Button"
import API from "../utils/API";

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
		console.log(value)
		console.log(this.state.bookSearch)
	};

	loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

	handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data }))
	  .catch(err => console.log(err));
	  console.log(this.state.books)
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
											<Button
											onClick={this.handleFormSubmit}
											type="primary"
											>
												Search
											</Button>
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