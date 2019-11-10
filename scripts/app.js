const handlers = {};

$(() => {
  const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');
    // home page routes
    this.get('/index.html', handlers.getHome);
    this.get('/', handlers.getHome);
    this.get('#/home', handlers.getAllQuizzes);

    // user routes
    this.get('#/register', handlers.getRegister);
    this.get('#/login', handlers.getLogin);

    this.post('#/register', handlers.registerUser);
    this.post('#/login', handlers.loginUser);
    this.get('#/logout', handlers.logoutUser);

    // app routes

    this.get('#/Quizzes', handlers.getTakeQuiz);
    this.get('#/takeQuiz', handlers.takeQuiz);

    this.get('#/details/:id', handlers.getQuizDetails);

    this.get('#/user/info', handlers.getUserInfo);

    this.get('#/join/:id', handlers.joinQuiz);
  });
  app.run();
});