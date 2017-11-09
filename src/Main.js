import App from './Routes'
import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoApp from './redux/reducers'


let store = createStore(todoApp)

function AA() {
    return <Provider store={store}>
            <App/>
        </Provider>
}

export default AA