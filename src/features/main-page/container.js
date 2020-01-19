import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import propTypes from 'prop-types';
import MainComponent from "./component";

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <MainComponent></MainComponent>
        )
    }
}

export default withRouter(MainContainer);