import React, { Component } from "react";
import Title from "../components/Title";
import { Row, Container } from "../components/Grid"
import API from "../utils/API";
import {BooksList, BooksListItem} from "../components/BookList";

class Saved extends Component {

	state = {
			books: [],
			title: "",
			subtitle: "",
			author: "",
			description: "",
			image: "",
			link: "",

	};

	componentDidMount() {
		this.loadBooks();
		console.log(this.state.books)
  }

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
							<div className="border">
							<h5 className="m-3 text-center">List of Your Books</h5>

							{!this.state.books.length ? (
								<BooksList>
									{this.state.books.map( book => (
											<BooksListItem
												key={book._id}
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
							) : (
								<h3 className="text-center"> No Results to Display </h3>
							)}

						</div>
					</Container>
				</Row>

				</div>
		)
	}

}

export default Saved;