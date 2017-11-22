import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from  'redux-thunk'
//store 添加中间件



export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
        )
    )
    //applyMiddleware(asdf,asdf,asdf)()createStore
    //let newStore = applyMiddleware(mid1, mid2, mid3, ...)(createStore)(reducer, null);
}