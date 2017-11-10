import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters,GET_MOVIE_LIST } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
            // return Object.assign({}, state, {
            //     todos: state.todos.map((todo, index) => {
            //         if (index === action.index) {
            //             return Object.assign({}, todo, {
            //                 completed: !todo.completed
            //             })
            //         }
            //         return todo
            //     })
            // })
        default:
            return state
    }
}
function movieList(state=[],action) {
    debugger
    switch (action.type){
        case GET_MOVIE_LIST :
            return action.movieList;
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos,
    movieList
})

export default todoApp