export default class QuizView {
  constructor() {
    this.elements = {
      questionContainer: document.getElementById("question-container"),
      questionElement: document.getElementById("question"),
      answerElement: document.getElementById("answer"),
      submitButton: document.getElementById("submit"),
      backButton: document.getElementById("back"),
      nextButton: document.getElementById("next"),
      questionDescriptionElement: document.getElementById("question-description"),
      questionReviewElement: document.getElementById("question-review"),
      reviewListElement: document.getElementById("review-list"),
      resultContainer: document.getElementById("result-container"),
      resultText: document.getElementById("result-text"),
      tryAgainButton: document.getElementById("try-again"),
      questionNumberElement: document.getElementById("question-number"),
      homeContainer: document.getElementById("home-container"),
      // ... tambahkan elemen lainnya jika ada ...
    };
  }

  showQuizNotes(notes) {
    this.elements.questionDescriptionElement.innerText = notes;
  }

  showQuestion(question, index, total) {
    this.elements.questionElement.innerText = question.question;
    this.elements.questionNumberElement.innerText = `Question ${index + 1} of ${total}`;
    this.elements.answerElement.value = "";
    this.updateNavigationButtons(index, total);
  }

  showResult(correctAnswers, wrongAnswers) {
    this.elements.questionContainer.style.display = "none";
    this.elements.resultContainer.style.display = "block";
    this.elements.resultText.innerHTML = `Jawaban Benar: ${correctAnswers}<br>Jawaban Salah: ${wrongAnswers}`;
    this.elements.tryAgainButton.style.display = "block";
    this.elements.backButton.style.display = "none";
    this.elements.questionNumberElement.style.display = "none";
  }

  updateNavigationButtons(index, total) {
    this.elements.backButton.style.display = index === 0 ? "none" : "inline-block";
    this.elements.nextButton.style.display = index === total - 1 ? "none" : "inline-block";
    if (index === total - 1) {
      this.elements.submitButton.style.display = "inline-block";
      this.elements.nextButton.style.display = "none";
    } else {
      this.elements.submitButton.style.display = "none";
      this.elements.nextButton.style.display = "inline-block";
    }
  }

  showHomePage() {
    // sembunyikan semua kontainer yang mungkin ditampilkan saat ini
    this.elements.questionContainer.style.display = "none";
    this.elements.resultContainer.style.display = "none";
    this.elements.questionReviewElement.style.display = "none";
    this.elements.nextButton.style.display = "none";
    // Asumsikan Anda memiliki elemen dengan id "home-container" di HTML Anda
    const homeContainer = document.getElementById("home-container");
    homeContainer.style.display = "block";
    homeContainer.innerHTML = `
      <h1>Selamat Datang di Kuis Chipulaja!</h1>
      <p>Mulai petualangan pengetahuan mu dengan memilih kuis di atas.</p>

      <div class="info-section">
        <p>Untuk kode dan info lebih lanjut, kunjungi:</p>
        <a href="https://github.com/chipulaja/quiz-app"><strong>GitHub Chipulaja Quiz App</strong></a>
      </div>

      <div class="info-section">
        <p>Dapatkan info terbaru dengan ngefollow :</p>
        <a href="https://www.instagram.com/chipulaja/" target="_blank">
          <img src="images/instagram-icon.png" alt="Instagram Icon" class="instagram-icon">
          <span class="instagram-handle">@chipulaja</span>
        </a>
      </div>

      <!-- Anda bisa menambahkan tautan atau daftar kuis di sini -->
    `;
  }

  showReview() {
    this.elements.questionReviewElement.style.display = "block";
    this.elements.reviewListElement.innerHTML = "";

    for (let question of this.model.shuffledQuestions) {
      const userAnswer = question.userAnswer.toLowerCase();
      const correctAnswer = question.answer.toLowerCase();
      let koreksi = createPNode("koreksi", "");

      if (userAnswer !== correctAnswer) {
        const diff = getElementDiff(userAnswer, correctAnswer);  // Pastikan fungsi ini bekerja dengan benar
        koreksi.appendChild(diff);
      }

      const liReview = createLiReview(question, koreksi);
      this.elements.reviewListElement.appendChild(liReview);
    }
  }

  getElementDiff(answer, userAnswer) {
    var span = null;
    const diff = Diff.diffWordsWithSpace(answer, userAnswer),
      fragment = document.createDocumentFragment();

    diff.forEach((part) => {
      const color = part.added ? 'green' :
        part.removed ? 'red' : 'grey';
      span = document.createElement('span');
      span.style.color = color;
      span.appendChild(document.createTextNode(part.value));
      fragment.appendChild(span);
    });

    return fragment;
  }

  createPNode(type, message) {
    const p    = document.createElement("p");
    const node = document.createTextNode(type + " : " + message);
    p.appendChild(node);
    return p;
  }

  createLiReview(quiz) {
    const userAnswer = quiz.userAnswer ? quiz.userAnswer.toLowerCase() : '';
    const correctAnswer = quiz.answer.toLowerCase();
    const question = quiz.question.toLowerCase();
    const explanation = quiz.explanation;
    const li = document.createElement("li");

    const koreksi = this.getElementDiff(userAnswer, correctAnswer);

    li.appendChild(this.createPNode("question", question));
    li.appendChild(this.createPNode("answer", correctAnswer));
    li.appendChild(this.createPNode("your answer", userAnswer));
    li.appendChild(koreksi);
    // Membuat elemen div untuk menampung explanation
    const explanationDiv = document.createElement("div");
    explanationDiv.innerHTML = "<br>explanation :<br>" + explanation; // Menetapkan konten HTML

    // Menambahkan elemen div ke dalam elemen li
    li.appendChild(explanationDiv);
    return li;
  }

  renderReviewList(questions) {
    this.elements.reviewListElement.innerHTML = "";

    questions.forEach(question => {
      const li = this.createLiReview(question);
      this.elements.reviewListElement.appendChild(li);
    });
  }

  activateReviewElement() {
    this.elements.questionReviewElement.style.display = "block";
    this.elements.reviewListElement.innerHTML = "";
  }

  resetView() {
    this.elements.resultContainer.style.display = 'none';
    this.elements.questionReviewElement.style.display = 'none';
    this.elements.questionContainer.style.display = 'block';
    this.elements.questionNumberElement.style.display = 'block';
    this.elements.homeContainer.style.display = 'none';
  }

  // ... metode lain untuk menghandle tampilan ...
}
