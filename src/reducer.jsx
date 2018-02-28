export default function reducer(state={
        fetching: false,
        fetched: false,
        users: [],
        error: null
    }, action) {
    switch (action.type) {
        case 'FETCH_USER_PENDING': {
            return {...state, fetching: true};
        }
        case 'FETCH_USER_FULFILLED': {
            return {...state, users: action.payload, fetching: false, fetched: true};
        }
        case 'FETCH_USER_REJECTED': {
            return {...state, fetching: false, fetched: false, error: action.payload};
        }
    }
    return state;
};
