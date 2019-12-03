import kinvey from '../API/ApiCalls'
const LOGIN_ACTION = 'login'
const REGISTER_ACTION = 'register'

const loginAction = (username, password) => (dispatch) => {
    dispatch({
        type: LOGIN_ACTION,
        payload: {username, password}
    })

    return kinvey.login(username, password).then(resp => {
        dispatch({
            type: LOGIN_ACTION,
        })

        return resp;
    })
};

// const registerAction = (username, password) => {
//     kinvey.register(username, password).then(data => ({
//         type: REGISTER_ACTION,
//         payload: data
//     }))
// };

const initialState = {
    isLoggedIn: false
}

export const isLoggedInReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTION : {
            return {
                resp: action.payload
            }
        }
        // case REGISTER_ACTION : {
        //     return {
        //         loggedInUser : action.payload
        //     }
        // }
    }
}