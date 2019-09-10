import React from "react";
import {Row, Col, Container} from "../Grid";
import Button from "../Button";
import "./style.css"


export function BooksList({children}) {
	return <ul className="list-group">{children}</ul>;
}

export function BooksListItem({
	
	props,
	title,
	subtitle = "",
	authors,
	image,
	description,
	infoLink
}) {
		return (
			<Container>
				<div className="border">
					<div className="d-flex justify-content-between">
						<h4 className="m-3">{title}</h4>
						<h5 className="m-3">{subtitle}</h5>
							<section>
									
									<Button
									href={infoLink}
									type="primary">
									View
									</Button>

									<Button
									// onClick={props.delOrSave}
									type="primary">
									{/* {props.delOrSaveBut} */}
									</Button>

							</section>    
					</div>
					<p className="ml-3">{authors}</p>
					
					<Row>
						<Col size="xs-4 sm-2">
								<img className="test m-3" src={image} />
						</Col>
						<Col size="xs-8 sm-9">
								<p>{description}
								</p>
						</Col>
					</Row>
				</div>
			</Container>
		)
}


// this.onSumbit = this.onSumbit.bind(this)
// onSubmit = (e) => { console.log(this)} or something like:
// onSubmit = (e) => { alert(this.state.inputValue) } 