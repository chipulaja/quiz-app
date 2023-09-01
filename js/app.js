import Router from "./router.js";
import QuizModel from "./model.js";
import QuizView from "./view.js";
import QuizController from "./controller.js";

let basePath = "/";
const currentPath = window.location.pathname;

if (currentPath.startsWith("/quiz-app/")) {
    basePath = "/quiz-app/";
}
 // Menginisiasi Model, View, dan Controller
const model = new QuizModel();
model.setBasePath(basePath);
const view = new QuizView();
const controller = new QuizController(model, view);

Router.setBasePath(basePath);

// Mendefinisikan rute aplikasi
Router.addRoute("/", () => {
    view.showHomePage(); // Asumsikan kita memiliki metode ini di `QuizView`
});

Router.addRoute("/question/:quiz", () => {
    const params = window.location.hash.replace("#", "").split("/");
    const quizName = params[2];
    controller.resetQuiz();
    controller.loadQuestions(quizName);
});

// Memulai aplikasi dengan menjalankan router untuk memuat halaman sesuai URL saat ini
Router.navigate();

window.addEventListener("hashchange", Router.navigate.bind(Router));
