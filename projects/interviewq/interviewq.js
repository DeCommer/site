fetch("./interviewq.json")
.then(response => response.json())
.then(data => iq(data))

const daysRemainingText = document.getElementById('span-days-remaining');

const today = new Date();
const targetDate = new Date(today.getFullYear(), 11, 2); // Month is zero-based (11 = December)
if (today > targetDate) {targetDate.setFullYear(targetDate.getFullYear() + 1);}
const timeDiff = targetDate - today;
const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
daysRemainingText.innerHTML = `${daysRemaining}`;


function iq(data) {
    const question = document.getElementById('iq-question');
    const newQuestion = document.getElementById('new-btn');

    function getNextQuestion() {
        for(let q in data.questions) {
            i = Math.floor(Math.random() * 40);
        }
        question.innerHTML = `${data.questions[i].question}`
    }
    getNextQuestion();
    newQuestion.addEventListener('click', () => {
        getNextQuestion()
    })
}
