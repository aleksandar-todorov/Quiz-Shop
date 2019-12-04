import {history} from '../helpers/history';
import kinvey from '../API/ApiCalls'
import {userConstants} from '../constants/userConstants'

export const userActions = {
    login,
    logout,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({username}));

        kinvey.login(username, password)
            .then(() => {
                dispatch(success(username));
                localStorage.setItem('user', JSON.stringify(username));
                history.push('/');
            }).catch((error) => {
            dispatch(failure(error.toString()));
            // dispatch(alertActions.error(error.toString()));
        });
    };

    function request(user) {
        return {type: userConstants.LOGIN_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
}

function logout() {
    kinvey.logout();
    localStorage.clear();
    return {type: userConstants.LOGOUT};
}