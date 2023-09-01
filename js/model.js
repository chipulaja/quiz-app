export default class QuizModel {
  constructor() {
    this.loadedQuizzes = {};
    this.currentQuestionIndex = 0;
    this.questions = [];            // Array untuk menyimpan pertanyaan asli dari JSON
    this.shuffledQuestions = [];    // Array untuk pertanyaan yang sudah diacak
    this.correctAnswers = 0;
    this.wrongAnswers = 0;
    this.quizName = "";
    this.quizNotes = "";
  }

  async loadQuestions(quizName) {
    try {
      // Periksa apakah quiz dengan nama quizName sudah dimuat sebelumnya
      if (!this.loadedQuizzes[quizName]) {
        const response = await fetch(`/data/${quizName}.json`);
        const quiz = await response.json();

        // Simpan quiz ke dalam objek loadedQuizzes agar tidak perlu dimuat lagi di kemudian hari
        this.loadedQuizzes[quizName] = quiz;

        this.questions = quiz.questions;
        this.quizNotes = quiz.notes; // Menyimpan notes dari kuis
        this.shuffledQuestions = [...this.questions]; // Kita copy pertanyaan asli ke array shuffledQuestions
        this.shuffleArray(this.shuffledQuestions);   // Lalu kita acak shuffledQuestions
      }
    } catch (error) {
      console.error("Failed to load questions:", error);
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  calculateResults() {
    this.correctAnswers = 0;
    this.wrongAnswers = 0;

    this.shuffledQuestions.forEach(question => {
      if (question.userAnswer && question.userAnswer.toLowerCase() === question.answer.toLowerCase()) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
    });
  }

  resetCurrentQuestionIndex() {
    this.currentQuestionIndex = 0;
  }
}
