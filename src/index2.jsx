import { applyMiddleware, combineReducers, createStore } from "redux";

const userReducer = (state={}, action) => {
    switch(action.type) {
        case "CHANGE_USER": {
            state = {...state, name: action.payload}
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age: action.payload}
            break;
        }
    }
    return state;
};

const tweetsReducer = (state={}, actions) => {
    return state;
};

const reducers =combineReducers({
    user: userReducer,
    tweets: tweetsReducer
}); 

const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
}

const middleware = applyMiddleware(logger);

const store = createStore(reducers, {}, middleware);

store.subscribe(()=>{
    console.log("store changed", store.getState());
});


store.dispatch({type: "CHANGE_USER", payload: "Mark"});
store.dispatch({type: "CHANGE_AGE", payload: 44});
store.dispatch({type: "CHANGE_USER", payload: "Bobby"});
store.dispatch({type: "CHANGE_AGE", payload: 55});