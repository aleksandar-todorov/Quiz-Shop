import kinvey from '../API/ApiCalls'

const LOGIN_ACTION = 'login'
const REGISTER_ACTION = 'register'

const loginAction = (username, password) => {
    kinvey.login(username, password).then(data => ({
        type: LOGIN_ACTION,
        payload: data
    }))
};


const initialState = {
    isLoggedIn: false
}

export const isLoggedInReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTION : {
            return {
                loggedInUser : action.payload
            }
        }
    }
}