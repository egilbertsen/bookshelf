import React from "react";
import { Col, Row } from "../Grid";
import SaveBtn from "../SaveBtn"
import "./style.css";
const SearchedBook = props => {

    let formattedAuthors;
    let rawAuthors; 
    let lastGuy;
    
    if (props.authors === undefined) {
        rawAuthors = ["Unknown"]
    } else {
        rawAuthors = props.authors
    }

    if (rawAuthors.length < 2) {
        formattedAuthors = rawAuthors;
    } else if (rawAuthors.length === 2) {
        formattedAuthors = rawAuthors.join(' and ')
    } else if (rawAuthors.length > 2) {
        let lastGuy = rawAuthors.pop();
        formattedAuthors = rawAuthors.join(', ') + ', and ' + lastGuy;
    }

    return (
        <div>
            <Row>
                <Col size="md-3">
                    <div className="imageCont"><img src={props.image} alt="bookcover thumbnail" className="bookImg" />
                    </div>
                </Col>
                <Col size="md-9">
                    <div className="infoWrapper">
                        <a href={props.link} target="_blank" rel="noopener noreferrer" className="bookLink">

                            {props.title} by {formattedAuthors}

                        </a><SaveBtn onClick={props.handleSave} />
                        <p>Description: {props.description} </p>
                        
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default SearchedBook;