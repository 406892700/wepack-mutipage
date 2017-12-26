import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Index from './pages/index.jsx';
import Reducers from './app/reducers/reducers';

// import App from './Router.jsx';

let store = createStore(Reducers);
ReactDOM.render(
    <AppContainer>
        <Provider store={ store }>
            <Index/>
        </Provider>
    </AppContainer>
    ,
    document.getElementById('root')
);
