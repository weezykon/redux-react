/* eslint-disable default-case */
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.num;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;
