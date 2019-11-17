import $ from 'jquery'
const kinvey = (() => {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_HJsnRrHjS'; // APP KEY HERE
    const APP_SECRET = '714ce89777404a078f0da3788673de48'; // APP SECRET HERE

    function makeAuth(auth) {
        if (auth === 'basic') {
            return {
                'Authorization': `Basic ${btoa(APP_KEY + ':' + APP_SECRET)}`
            }
        } else {
            return {
                'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`
            }
        }
    }

    const login = (username, password) => {
        console.log(this)
        return this.post('user', 'login', 'basic', {
            username,
            password
        });
    }

    const logout = () => {
        return this.post('user', '_logout', 'kinvey');
    }


    function makeRequest(method, collection, endpoint, auth) {
        return {
            url: BASE_URL + collection + '/' + APP_KEY + '/' + endpoint,
            method,
            headers: makeAuth(auth)
        }
    }

    function post(collection, endpoint, auth, data) {
        let req = makeRequest('POST', collection, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    function get(collection, endpoint, auth) {
        return $.ajax(makeRequest('GET', collection, endpoint, auth));
    }

    function update(collection, endpoint, auth, data) {
        let req = makeRequest('PUT', collection, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    function remove(collection, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', collection, endpoint, auth));
    }

    return {
        get,
        post,
        update,
        remove,
        login,
        logout
    }
})();

export default kinvey