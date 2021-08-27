const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const container = document.querySelector('.container');
const question = document.querySelector('h2');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const answers = document.querySelectorAll('input');
const btn = document.querySelector('button');
let currentQuiz = 0;
let score = 0;

function deleteAns() {
    answers.forEach(function(el) {
        el.checked = false;
    })
}

function update() {
    deleteAns();

    question.innerText = quizData[currentQuiz].question;
    a_text.innerText = quizData[currentQuiz].a;
    b_text.innerText = quizData[currentQuiz].b;
    c_text.innerText = quizData[currentQuiz].c;
    d_text.innerText = quizData[currentQuiz].d;
}

update();

btn.addEventListener('click', function() {
    let ans;
    answers.forEach(function(el) {
        if (el.checked) {
            ans = el.id;
        }
    })
    if (ans) {
        if (ans === quizData[currentQuiz].correct)
            score++;
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            update();
        }
        else {
            container.innerHTML =  `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
        `
        }
    }

})
