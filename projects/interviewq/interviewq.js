fetch("./interviewq.json")
.then(response => response.json())
.then(data => iq(data))

function iq(data) {
    const question = document.getElementById('iq-question');
    const newQuestion = document.getElementById('new-btn');
    function getNextQuestion() {
        for(let q in data.questions) {
            i = Math.floor(Math.random() * data.questions.length);
        }
        question.innerHTML = `${data.questions[i].question}`
    }
    function clearBoxes() {
        let textBox = document.querySelectorAll('textarea');
        for(let i = 0; i < textBox.length; i++) {
            textBox[i].value = "";
        }
    }
    getNextQuestion();
    newQuestion.addEventListener('click', () => {
        getNextQuestion();
        clearBoxes();
    })
}
