// Syllabus data
const syllabus = [
  "Module 1: Introduction to Algebra",
  "Module 2: Geometry Fundamentals",
  "Module 3: Calculus Basics",
  "Module 4: Statistical Analysis"
];


const syllabusList = document.getElementById('syllabus-list');
syllabus.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  syllabusList.appendChild(listItem);
});

// Enroll button event listener
const enrollBtn = document.getElementById('enroll-btn');
enrollBtn.addEventListener('click', () => {
  alert('Thank you for enrolling in the Mathematics course!');
});

// Quiz button event listener
const quizBtn = document.getElementById('quiz-btn');
quizBtn.addEventListener('click', () => {
  
  const questions = [
    {
      question: 'What is the value of x in 2x + 5 = 11?',
      options: ['2', '3', '4', '5'],
      answer: '3'
    },
    {
      question: 'What is the formula for the area of a circle?',
      options: ['πr^2', '2πr', 'πd', 'r^2'],
      answer: 'πr^2'
    }
  ];

  // Display quiz questions
  const quizContainer = document.createElement('div');
  quizContainer.className = 'quiz-container';
  document.body.appendChild(quizContainer);

  questions.forEach((question, index) => {
    createQuizQuestion(quizContainer, question);
  });
});

// Function to create quiz question
function createQuizQuestion(container, question) {
  const quizQuestion = document.createElement('h3');
  quizQuestion.textContent = question.question;
  container.appendChild(quizQuestion);

  const optionsList = document.createElement('ul');
  question.options.forEach((option) => {
    const optionItem = document.createElement('li');
    optionItem.textContent = option;
    optionsList.appendChild(optionItem);
  });
  container.appendChild(optionsList);

  const answerInput = document.createElement('input');
  answerInput.type = 'text';
  answerInput.placeholder = 'Enter answer';
  container.appendChild(answerInput);

  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.addEventListener('click', () => {
    const userAnswer = answerInput.value.trim();
    if (userAnswer === question.answer) {
      alert('Correct!');
    } else {
      alert('Incorrect. The correct answer is ' + question.answer);
    }
  });
  container.appendChild(submitBtn);
}


