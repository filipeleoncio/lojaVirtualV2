import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pathNames from '../utils/pathNames';
import Login from './Login';
import Loja from './Loja';

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={ pathNames.root } exact component={ Loja } />
                <Route path={ pathNames.login } exact component={ Login } />

            </Switch>
        </BrowserRouter>
    );
}

export default Root;
