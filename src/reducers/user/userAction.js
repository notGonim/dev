export const LogInAction = ({ email, uid, displayName, photoURL }) => (dispatch) => {

    dispatch({
        type: "USER_LOGGED_IN",
        payLoad: {
            user: { email, uid, displayName, photoURL }
        }
    })
}

export const LogOutAction = () => (dispatch) => {

    dispatch({
        type: 'USER_LOGGED_OUT',
        payLoad: {
            user: null
        }
    })

}