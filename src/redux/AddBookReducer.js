//Section 1 - Initial State
const initialState = {
    coverImage: '',
    headerImage: '',
    title: '',
    author: '',
    pageCount: 0,
};

//Section 2 - Action Types
const ADD_IMAGES = 'ADD_IMAGES';

//Section 3 - Action Creators
export function addImages(value) {
    return {
        type: ADD_IMAGES,
        payload: value,
    }
};

//Section 4 - Reducer Function
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_IMAGES:
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
}