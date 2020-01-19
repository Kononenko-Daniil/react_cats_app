import React from "react";
import propTypes from 'prop-types';
import BackgroundComponent from "./components/BackgroundComponent";
import CatsContainer from "./cats/container"

const MainComponent = (props) => {
    return (
        <div>
            <BackgroundComponent></BackgroundComponent>
            <CatsContainer></CatsContainer>
        </div>
    )
}

export default MainComponent;