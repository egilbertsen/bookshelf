import React, { Component } from "react";
import './style.css';
import { Link } from "react-router-dom";
import DeleteBtn from "../../components/DeleteBtn"

export default class BookSpine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleSpineClick = event => {
        event.preventDefault();
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }

    render() {
        let isOpenStyle;
        let bookCoverAnimation;

        if (this.state.open) {

            isOpenStyle = {
                margin: "5px",
                boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
            }

            bookCoverAnimation = {
                opacity: "1",
                height: "300px",
                width: "400px",
                transition: "all 1s ease"
            }

        } else {
            
            isOpenStyle = { boxShadow: "none" }

            bookCoverAnimation = {
                width: "000px",
                height: "300px",
                opacity: "0",
                transition: "all 1s ease"

            }
        }


        return (

            <div style={isOpenStyle} className="bookBox">
                <div key={this.props._id} className="spineBod" onClick={this.handleSpineClick}>
                    <h3>
                        {this.props.title} by {this.props.authors}
                    </h3>
                </div>
                
                    <div className="coverBod" style={bookCoverAnimation}>
                        <div className="coverImgHolder">
                            <img src={this.props.image} className="coverImg" alt="bookcover" />
                        </div>
                        <div className="coverText">
                            <Link to={this.props.link}>
                                <h4>
                                    {this.props.title} by {this.props.authors}
                                </h4>
                            </Link>
                            <p><span className="desc">Description: </span>{this.props.description} </p>
                            <DeleteBtn onClick={this.props.handleDelete} />
                        </div>
                    </div>
                

            </div>
        )
    }
}    