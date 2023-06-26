const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "Hypertext Markup Language",
    d: "Hypertext Markup Lodge",
    ans: "ans3",
  },
  {
    question: "Q2: What is the full form of JS?",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JavaScrap",
    d: "JavaSricpt",
    ans: "ans1",
  },
  {
    question: "Q3: Which data structure uses First-In-First-Out (FIFO) ordering?",
    a: "Stack",
    b: "Queue",
    c: "Array",
    d: "Linked List",
    ans: "ans2",
  },
  {
    question: "Q4:What is the purpose of the 'git clone' command in Git?",
    a: "Create a new branch",
    b: "Create a new repository",
    c: "Clone a remote repository",
    d: "Commit changes",
    ans: "ans3",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
loadQuestion();

const answers = document.querySelectorAll(".answer");
const show_score = document.querySelector("#show_score");

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsEle) => {
    if (curAnsEle.checked) {
      answer = curAnsEle.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsEle) => (curAnsEle.checked = "false"));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    show_score.innerHTML = `
    <h3> You scored ${score}/${quizDB.length}</h3>
    <button class="btn" onclick="location.reload()">Play Again</button>
    `;
    show_score.classList.remove("scoreArea");
  }
});
