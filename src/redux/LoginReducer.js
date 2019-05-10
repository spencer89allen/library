//Section 1 - create initial state forr the counter reducer
const initialState = {
    isLogin: false,
}

//Section 2 - create action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//Section 3 - create action-creators
export function login() {
    return {
        type: LOGIN
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
            return Object.assign( {}, state, {isLogin: !state.isLogin});
        case LOGOUT:
            return Object.assign( {}, state, {isLogin: false})
        default:
            return state;
    }
}