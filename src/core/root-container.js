import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import MainContainer from './../features/main-page/container'
import '../assets/catsStyle.css';

const Root = () => {
    return (
        <BrowserRouter basename = "/">
            <Switch>
                <Route exact path="/" component = {MainContainer}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Root;