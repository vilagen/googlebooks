import React, { Component } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import { Row, Container } from "../components/Grid"
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


	handleFormSubmit = event => {
    event.preventDefault();
    API.searchBook(this.state.bookSearch)
			.then( ({data: {items}} ) => 
			this.setState({ books: items }))
	  .catch(err => console.log(err));
	  console.log(this.state.books)
	};
	
	onClickSaveBook = (title, subtitle, author, description, image, link) => {
			API.saveBook({
				title,
				subtitle,
				author,
				description,
				image,
				link,
			})
				.then(res => {
				alert("Book Saved.")
				console.log(res)
			})
		};
	

	render() { 
			return ( 
				<div>
					<Title
					title="Google Book Search"
					subtitle="Search and Save Your Favorite Books!" />

					<div className="my-3" />

					<Container>
						<div className="border my-2 bg-light">
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
										color="primary"
										text="Search">
										</Button>
									</div>

								</form>

						</div>
					</Container>

					<Row>
					<Container>
						<div className="border bg-light text-center">

							<h5 className="m-3">Results</h5>
							<a className="btn btn-primary my-2" 
							href="/books">Saved Books</a>

								<BooksList>
									{this.state.books.map((book, index) => {
										return (
											<BooksListItem
												key={index}
												title={book.volumeInfo.title}
												subtitle={book.volumeInfo.subtitle}
												infoLink={book.volumeInfo.previewLink}	
												authors={book.volumeInfo.authors[0]}
												image={book.volumeInfo.imageLinks.smallThumbnail}
												description={book.volumeInfo.description}
												allowSave={true}
												onSave={() => this.onClickSaveBook(book.volumeInfo.title, book.volumeInfo.subtitle,
												book.volumeInfo.authors[0], book.volumeInfo.description, book.volumeInfo.imageLinks.thumbnail, 
												book.volumeInfo.previewLink)}
												/>
											);
										})
									}
								</BooksList>

							</div>
					</Container>
				</Row>

				</div>
		)
	}

}

export default Search;