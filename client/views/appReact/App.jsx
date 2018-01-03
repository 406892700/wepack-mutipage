import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { AppContainer } from 'react-hot-loader';
import { Router, Route, hashHistory } from 'react-router';
import Index from './pages/index/index.jsx';
import About from './pages/about/about.jsx';
import Reducers from './app/reducers';

// import App from './Router.jsx';

let store = createStore(Reducers);
ReactDOM.render(
    <Provider store={ store }>
        <Router history={hashHistory}>
            <Route path="/" component={Index} />
            <Route path="/about" component={About} />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
