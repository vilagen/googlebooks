import React, { Component } from "react";
import Title from "../components/Title";
import { Row, Container } from "../components/Grid"
import API from "../utils/API";
import {BooksList, BooksListItem} from "../components/BookList";
import { Link } from "react-router-dom";
import Button from "../components/Button"

class Saved extends Component {

	state = {
			books: [],
	};

	componentDidMount() {
		this.loadBooks();
	};

	loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
			.catch(err => console.log(err));
  };

	deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
							<div className="border bg-light text-center">
							<h5 className="m-3">List of Your Books</h5>

							<Link to={"/"}>
							<Button
							color="primary"
							text="Search Books">
							</Button>
							</Link>
							
								<BooksList>
									{this.state.books.map( (book, index) => (
											<BooksListItem
												key={index}
												title={book.title}
												subtitle={book.subtitle}
												infoLink={book.link}	
												authors={book.author}
												image={book.image}
												description={book.description}
												allowDelete={true}
												onDelete={() => this.deleteBook(book._id)}
											/>
										)
									)}
								</BooksList>
						</div>
					</Container>
				</Row>

				</div>
		)
	}

}

export default Saved;