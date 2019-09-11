import React, { Component } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import { Row, Col, Container } from "../components/Grid"
import Button from "../components/Button"
import API from "../utils/API";
import {BooksList, BooksListItem} from "../components/BookList";

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

	// loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", description: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

	handleFormSubmit = event => {
    event.preventDefault();
    API.searchBook(this.state.bookSearch)
			.then( ({data: {items}} ) => 
			this.setState({ books: items }))
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
											text="Search">
											</Button>
										</div>
								</form>
						</div>
					</Container>

					<Row>
					<Container>
							<div className="border">
							<h5 className="m-3">Results</h5>
							<BooksList>
								{this.state.books.map((book, index) => {
									return (
										<BooksListItem
											key={index}
											title={book.volumeInfo.title}
											subtitle={book.volumeInfo.subtitle}
											infoLink={book.volumeInfo.infoLink}
											delOrSaveBut="Save"
											authors={book.volumeInfo.authors}
											image={book.volumeInfo.imageLinks.thumbnail}
											description={book.volumeInfo.description}
											allowSave={true}
											onSave={() => console.log(`#${book.volumeInfo.title} got clicked`)}
										/>
									);
								})}
							</BooksList>
							</div>
					</Container>
				</Row>

				</div>
		)
	}

}

export default Search;