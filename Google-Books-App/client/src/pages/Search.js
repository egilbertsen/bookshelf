import React, { Component } from "react";
import SaveBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";

class Search extends Component {
    state = {
        books: [],
        query: ""
    }


    searchGoogle = () => {
        let query = this.state.query
        API.searchGoogle(query)
                .then(res =>
                    this.setState({books: res.data})
                )
                .catch(err => console.log(err));
        };
    }
}