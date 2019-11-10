handlers.getRegister = function (ctx) {
    ctx.loadPartials({
        header: 'views/common/header.hbs',
        footer: 'views/common/footer.hbs'
    }).then(function () {
        this.partial('views/user/register.hbs');
    }).catch(function (err) {
        notifications.handleError(err);
    });
};

handlers.getLogin = function (ctx) {
    ctx.loadPartials({
        header: 'views/common/header.hbs',
        footer: 'views/common/footer.hbs'
    }).then(function () {
        this.partial('views/user/login.hbs');
    }).catch(function (err) {
        notifications.handleError(err);
    });
};

handlers.registerUser = function (ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;
    let repeatPassword = ctx.params.rePassword;
    if (repeatPassword !== password) {
        notifications.showError('Passwords must match');
        ctx.redirect('#/register');
        return;
    }
    if (username.length < 3) {
        notifications.showError('The username should be at least 3 characters long');
    } else if (password.length < 6) {
        notifications.showError('The password should be at least 6 characters long');
    } else {
        userService.register(username, password).then((res) => {
            userService.saveSession(res);
            notifications.showSuccess('User registration successful.');
            ctx.redirect('#/home');
        }).catch(function (err) {
            notifications.handleError(err);
        });
    }
};

handlers.logoutUser = function (ctx) {
    userService.logout().then(() => {
        sessionStorage.clear();
        notifications.showSuccess('Logout successful.');
        ctx.redirect('#/');
    })
};

handlers.loginUser = function (ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;
    userService.login(username, password).then((res) => {
        userService.saveSession(res);
        notifications.showSuccess('Login successful.');
        ctx.redirect('#/home');
    }).catch(function (err) {
        notifications.handleError(err);
    });
};

handlers.getUserInfo = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = userService.getUsername();
    let userId = userService.getId();

    quizzesService.getMyQuizzes(userId).then(res => {
        ctx.quizzes = res;
    ctx.loadPartials({
        header: 'views/common/header.hbs',
        footer: 'views/common/footer.hbs'
    }).then(function () {
        this.partial('views/user/info.hbs');
    }).catch(function (err) {
        notifications.handleError(err);
    });
    });
};