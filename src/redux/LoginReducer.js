//Section 1 - create initial state forr the counter reducer
const initialState = {
    user: null,
}

//Section 2 - create action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//Section 3 - create action-creators
export function login(user) {
    return {
        type: LOGIN,
        payload: user,
    };
};

export function logOut() {
    return {
        type: LOGOUT
    }
}

//Section 4 - create the reducer function
export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return Object.assign( {}, state, {user: action.payload});
        case LOGOUT:
            return Object.assign( {}, state, {user: null})
        default:
            return state;
    }
}