import './App.scss'

import React from 'react'
import { Router, Switch, Route } from 'react-router'

import { createBrowserHistory } from 'history'

import { PageHome } from './pages'

const browserHistory = createBrowserHistory()

export function App(props) {
    return (
        <div className="app">
            <Router history={browserHistory} >
                <Switch>
                    <Route path="/" component={PageHome}/>
                </Switch>
            </Router>
        </div>
    )
}