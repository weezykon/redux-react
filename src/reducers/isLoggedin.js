/* eslint-disable default-case */
const loggedReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return false;
    }
}

export default loggedReducer;
