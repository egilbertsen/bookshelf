import React, { Component } from "react";
import './style.css';
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn";
import { CgPushChevronRight } from 'react-icons/cg';

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

        // Formatting our author list for display

        let formattedAuthors;

        if (this.props.authors.length < 1) {
            formattedAuthors = "Unknown"
        } else if (this.props.authors.length === 1) {
            formattedAuthors = this.props.authors;
        } else if (this.props.authors.length === 2) {
            const rawAuthors = this.props.authors;
            formattedAuthors = rawAuthors.join(' and ')
        } else if (this.props.authors.length > 2) {
            const rawAuthors = this.props.authors;
            const lastGuy = rawAuthors.pop();
            formattedAuthors = rawAuthors.join(', ') + ', and ' + lastGuy;
        }


        // setting up conditional rendering for open state

        let isOpenStyle;
        let bookCoverAnimation;
        let coverContAnim;
        let arrowAnimation;

        if (this.state.open) {

            isOpenStyle = {
                marginLeft: "5px",
                marginRight: "5px",
                boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
            }

            arrowAnimation = {
                transform: "rotate(-180deg)",
                transition: "all 1s ease-in-out"
            }

            bookCoverAnimation = {
                width: "300px",
                transition: "all .5s ease-in-out"
            }

            coverContAnim = {
                opacity: "1",
                transitionDelay: ".4s",
                transition: "all .5s ease-in-out"
            }

        } else {
            
            isOpenStyle = { boxShadow: "none" }

            arrowAnimation = {
                transform: "rotate(0deg)",
                transition: "all 1s ease-in-out"
            }

            bookCoverAnimation = {
                width: "000px",
                transitionDelay: ".4s",
                transition: "all .5s ease-in-out"
            }

            coverContAnim = {
                opacity: "0",
                transition: "all .5s ease-in-out"
            }
        }


        return (
            <div style={isOpenStyle} className="bookBox">

                <div key={this.props._id} className="spineBod" onClick={this.handleSpineClick}>
                    <div className ="spineWriting">
                        <h3>
                            {this.props.title} by {formattedAuthors}
                        </h3>
                    </div>
                    <div className="spineArrowCont">
                    
                        <CgPushChevronRight className="spineArrow" style={arrowAnimation}> </CgPushChevronRight>

                    </div>
                </div>

                <div className="coverBod" style={bookCoverAnimation}>
                    <div className="coverCont" style={coverContAnim}>
                        <div className="coverImgHolder">
                            <img src={this.props.image} className="coverImg" alt="bookcover" />
                        </div>
                        <div className="coverText">
                            <Link to={this.props.link}>
                                <h4>
                                    {this.props.title} by {formattedAuthors}
                                </h4>
                            </Link>
                            <p><span className="desc">Description: </span>{this.props.description} </p>
                            <DeleteBtn onClick={this.props.handleDelete} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}    