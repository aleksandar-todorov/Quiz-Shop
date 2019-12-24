import kinvey from "../API/ApiCalls";

const userService = (() => {

    function saveSession(res) {
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('authtoken', res._kmd.authtoken);
    }

    function login(username, password) {
        return kinvey.post('user', 'login', 'basic', {
            username,
            password
        });
    }

    function logout() {
        return kinvey.post('user', '_logout', 'kinvey');
    }

    return {
        saveSession,
        login,
        logout,
    }
})();

export default userService