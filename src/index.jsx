import axios from 'axios';

import store from './store.jsx';

store.dispatch({
    type: "FETCH_USER",
    payload: axios.get('/users')
});
