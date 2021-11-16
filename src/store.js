import {createStore, applyMiddleware /* compose */} from 'redux'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk';


const logMiddleware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState())
    return next(action)
}
//вместо диспач в вызове второй ф-ции еще можно написть некст
const stringMiddleware = () => (next) => (action) => {
    if(typeof action === 'string'){
        return next({
            type : action
        })
    }

    return next(action)
}

/* const logEnhancer = (createStore) => (...args) => {
    const store = createStore(...args)
    const originalDispatch = store.dispatch
    store.dispatch = (action) => {
        console.log(action.type)
        return originalDispatch(action)
    }

    return store
}

const stringEnhancer = (createStore) => (...args) => {
    const store = createStore(...args)
    const originalDispatch = store.dispatch
    store.dispatch = (action) => {
        if(typeof action === 'string'){
            return originalDispatch({
                type : action
            })
        }
        return originalDispatch(action)
    }

    return store
} */

const store = createStore(reducer, applyMiddleware(
    thunkMiddleware, stringMiddleware, logMiddleware))

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
} 

store.dispatch(delayedActionCreator(3000))

export default store
