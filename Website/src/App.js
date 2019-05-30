import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import BaseScreen from './components/screens/base';
import './App.scss';

//import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render () {
        return(
            <Router>
                <Switch>
                    <Route path='/' component={BaseScreen} />
                </Switch>
            </Router>
        ); 
    }
}

export default App;