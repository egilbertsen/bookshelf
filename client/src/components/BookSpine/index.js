import React, { Component } from "react";
import { Card } from "react-bootstrap";
import './style.css';
import DeleteBtn from "../../components/DeleteBtn"

export default class BookSpine extends Component {

    constructor(props) {
        super(props);
    }

    
    render() {
        let bgcolors = ["#F8E9A1", "#F76C6C", "#24305E"]
        let txtcolors = ["#24305E", "#374785", "#a8D0E6"]
        let i = Math.floor( Math.random() * 3 )
        const bgcolor = bgcolors[i]
        const txtcolor = txtcolors[i]

        return (

            <Card style={{backgroundColor: `${bgcolor}`, color: `${txtcolor}`}} className="bookBox">
                <Card.Body key={this.props._id}>
                    <Card.Title> 
                        {this.props.title} by {this.props.authors}
                    </Card.Title>
                    {/* <DeleteBtn onClick= {this.props.handleDelete} /> */}
                </Card.Body>
            </Card>
        )    
    }
}    