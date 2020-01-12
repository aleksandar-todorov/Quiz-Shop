import {userConstants} from '../constants/userConstants'

export const userActions = {
    login,
    logout,
};

function login(username) {
    return dispatch => {
        dispatch(success(username));
    };

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }
}

function logout() {
    return {type: userConstants.LOGOUT};
}