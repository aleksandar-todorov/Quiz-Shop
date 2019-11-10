handlers.getTakeQuiz = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = userService.getUsername();

    ctx.loadPartials({
        header: 'views/common/header.hbs',
        footer: 'views/common/footer.hbs',
    }).then(function () {
        this.partial('views/quizzes/Quizzes.hbs');
    }).catch(function (err) {
        notifications.handleError(err);
    });
};

handlers.takeQuiz = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = userService.getUsername();

    let data = {...ctx.params};

    quizzesService.getQuizByCategory(data.category)
        .then(function (res) {

            let category = "";
            let quiz = res[0];
            if (quiz.category === 'Random Category') {
                //generate a random category from 0 to 6
                const categories = ['Money', 'Relationships', 'Career', 'Health', 'Creative', 'Fun', 'Mind Bending'];
                category = categories[getRandomInt(7)];
            } else {
                category = quiz.category;
            }

            //TODO show the questions on the screen
            quizzesService.getQuestionByCategoryAndNumber(category, getRandomInt(2) + 1)
                .then(function (res) {
                    console.log(res[0]);
                })
                .catch(function (err) {
                    notifications.handleError(err);
                });

            notifications.showSuccess('Quiz starting successfully.');
        })
        .catch(function (err) {
            notifications.handleError(err);
        })
};

handlers.getAllQuizzes = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = userService.getUsername();

    quizzesService.getAll()
        .then(function (res) {
            let userId = userService.getId();

            let quizzes = res;

            quizzes.forEach((quiz) => quiz.isCreator = quiz._acl.creator === userId);

            ctx.quizzes = quizzes;

            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            })
                .then(function () {

                    this.partial('./views/home/home.hbs')

                })
                .catch(function (error) {
                    notifications.handleError(error);
                })
        });

};

handlers.getQuizDetails = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = userService.getUsername();
    let id = ctx.params.id;
    quizzesService.getAQuiz(id)
        .then(function (res) {
            let userId = userService.getId();

            ctx.name = res.name;
            ctx.dateTime = res.dateTime;
            ctx.description = res.description;
            ctx.imageURL = res.imageURL;
            ctx.joins = res.joins;
            ctx.organizer = res.organizer;

            ctx.isCreator = res._acl.creator === userId;
            ctx._id = id;

            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            })
                .then(function () {

                    this.partial('./views/quizzes/quizDetails.hbs');
                })
                .catch(function (error) {

                    notifications.handleError(error);
                })
        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};

handlers.joinQuiz = async function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = userService.getUsername();
    let id = ctx.params.id;
    try {
        let quiz = await quizzesService.getAQuiz(id);
        quiz.joins = Number(quiz.joins) + 1;

        quizzesService.editQuiz(id, quiz).then(function () {
            notifications.showSuccess('You join the quiz successfully.');
            ctx.redirect('#/home');
        }).catch(function (err) {
            notifications.handleError(err);
        })
    } catch (e) {
        notifications.handleError(e);
    }
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}