import App from './Routes'
import React from 'react'
import createStore from './redux/configureStore'
import {Provider} from 'react-redux'


let store = createStore();

function AA() {
    return <Provider store={store}>
            <App/>
        </Provider>
}

export default AA