const INITIAL_STATE = {
    currentUser: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_LOGGED_IN':
            return {
                ...state,
                currentUser: action.payLoad.user
            };
        case 'USER_LOGGED_OUT':
            return {
                ...state,
                currentUser: action.payLoad.user
            };
        default:
            return state;
    }
}

export default userReducer