import Router from "./router.js";
import QuizModel from "./model.js";
import QuizView from "./view.js";
import QuizController from "./controller.js";

// Menginisiasi Model, View, dan Controller
const model = new QuizModel();
const view = new QuizView();
const controller = new QuizController(model, view);

// Mendefinisikan rute aplikasi
Router.addRoute("/", () => {
    view.showHomePage(); // Asumsikan kita memiliki metode ini di `QuizView`
});

Router.addRoute("/question/:quiz", () => {
    const params = window.location.pathname.split('/');
    const quizName = params[2]; 
    controller.loadQuestions(quizName);
});

// Memulai aplikasi dengan menjalankan router untuk memuat halaman sesuai URL saat ini
Router.navigate();
