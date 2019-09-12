import React, { Component } from "react";
import Title from "../components/Title";
import { Row, Container } from "../components/Grid"
import API from "../utils/API";
import {BooksList, BooksListItem} from "../components/BookList";

class Saved extends Component {

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
				this.setState({ books: res.data,  title: "", author: "", description: "", 
				image: "",  link: "", date: ""})
      )
      .catch(err => console.log(err));
  };


	render() { 
			return ( 
				<div>
					<Title 
					title="Your Saved Book List"
					subtitle="View or Delete Your Books"/>

					<div className="my-3" />

					<Row>
					<Container>
							<div className="border">
							<h5 className="m-3 text-center">List of Your Books</h5>
							<BooksList>
								{this.state.books.map((book, index) => {
									return (
										<BooksListItem
											key={index}
											title={book.volumeInfo.title}
											subtitle={book.volumeInfo.subtitle}
											infoLink={book.volumeInfo.infoLink}	
											authors={book.volumeInfo.authors}
											image={book.volumeInfo.imageLinks.thumbnail}
											description={book.volumeInfo.description}
											allowDelete={true}
											onDelete={() => console.log(`${book.volumeInfo.title} got clicked!`)}
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

export default Saved;