const quizzesService = (() => {

    function getAll() {
        return kinvey.get('appdata', 'quizzes?query={}&sort={"joins": -1}', 'kinvey')
    }

    function getAQuiz(id) {
        return kinvey.get('appdata', `quizzes/${id}`, 'kinvey')
    }

    function getQuizByCategory(category) {
        return kinvey.get('appdata', `quizzes/?query={"category":"${category}"}`, 'kinvey')
    }

    function getQuestionByCategoryAndNumber(category, number) {
        return kinvey.get('appdata', `questions/?query={"category":"${category}", "question.id":${number}}`, 'kinvey')
    }

    function getMyQuizzes(username) {
        return kinvey.get('appdata', `quizzes?query={"_acl.creator":"${username}"}`, 'kinvey')
    }

    return {
        getAll,
        getAQuiz,
        getQuizByCategory,
        getQuestionByCategoryAndNumber,
        getMyQuizzes,
    }
})();