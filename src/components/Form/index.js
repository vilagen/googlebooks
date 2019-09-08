import React from "react";
import { Col, Row, Container } from "../Grid";
import Input from "../Input";

function Form() {
    return (
        <Container>
            <h5 className="m-3">Book Search</h5>
            <form>
                <Input
                    name="bookSearch"
                    value={this.state.bookSearch}
                    onChange={this.handleInputChange}
                    placeholder="Search for a Book"
                />
            </form>
        </Container>
    )
}