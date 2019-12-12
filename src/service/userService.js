import kinvey from "../API/ApiCalls";

const userService = (() => {
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function getUsername() {
        return sessionStorage.getItem("username") || "";
    }

    function getId() {
        return sessionStorage.getItem("id") || "";
    }

    function saveSession(res) {
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('authtoken', res._kmd.authtoken);
        sessionStorage.setItem('id', res._id);
    }

    function register(username, password) {
        return kinvey.post('user', '', 'basic', {
            username,
            password
        })
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
        isAuth,
        getUsername,
        getId,
        saveSession,
        register,
        login,
        logout,
    }
})();

export default userService