import QuizModel from "./model.js";
import QuizView from "./view.js";

export default class QuizController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.quizName = "";
    this.initEventListeners();
  }

  initEventListeners() {
    this.view.elements.backButton.addEventListener("click", () => this.prevQuestion());
    this.view.elements.nextButton.addEventListener("click", () => this.nextQuestion());
    this.view.elements.submitButton.addEventListener("click", () => this.submitAnswers());
    this.view.elements.tryAgainButton.addEventListener("click", () => this.reloadQuiz());
    this.view.elements.answerElement.addEventListener("input", () => this.handleInput());
  }

  async loadQuestions(quizName) {
    // Tampilkan animasi loading
    document.getElementById("loading-animation").classList.remove("hidden");

    this.quizName = quizName; // Menyimpan quizName ke controller
    await this.model.loadQuestions(quizName);

    // Sembunyikan animasi loading
    document.getElementById("loading-animation").classList.add("hidden");
    this.view.resetView();
    this.view.showQuizNotes(this.model.quizNotes); // Menampilkan notes dari kuis
    this.showQuestion(0); // Tampilkan pertanyaan pertama setelah memuat pertanyaan
  }

  showQuestion(index) {
    if (index >= 0 && index < this.model.shuffledQuestions.length) {
      const question = this.model.shuffledQuestions[index];
      this.view.showQuestion(question, index, this.model.shuffledQuestions.length);
    }
  }

  nextQuestion() {
    if (this.model.currentQuestionIndex < this.model.shuffledQuestions.length - 1) {
      this.model.currentQuestionIndex++;
      this.showQuestion(this.model.currentQuestionIndex);
    }
  }

  prevQuestion() {
    if (this.model.currentQuestionIndex > 0) {
      this.model.currentQuestionIndex--;
      this.showQuestion(this.model.currentQuestionIndex);
    }
  }

  handleInput() {
    const answer = this.view.elements.answerElement.value;
    if (answer) {
      this.model.shuffledQuestions[this.model.currentQuestionIndex].userAnswer = answer;
    }
  }

  submitAnswers() {
    this.view.activateReviewElement();
    this.model.calculateResults();
    this.view.renderReviewList(this.model.shuffledQuestions);
    this.view.showResult(this.model.correctAnswers, this.model.wrongAnswers);
  }

  resetQuiz() {
    this.model.resetQuestion();
  }

  reloadQuiz() {
    this.model.resetCurrentQuestionIndex();
    this.loadQuestions(this.quizName);
  }
}
