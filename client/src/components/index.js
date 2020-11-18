import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './auth';
import Homepage from './homepage';
import Messages from './messages';
import NotFoundError from './errors/not-found-error';

const Index = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/user" component={Auth}/>
                    <Route exact path="/user/message" component={Messages}/>
                    <Route path="" component={NotFoundError}/>
                </Switch>
            </Router>
        </div>
    );
};

export default Index;