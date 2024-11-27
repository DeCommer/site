fetch("./interviewq.json")
.then(response => response.json())
.then(data => iq(data))

document.addEventListener("DOMContentLoaded", () => {
    const datePicker = document.getElementById("date-picker");
    const countdownDisplay = document.getElementById("countdown");
    datePicker.addEventListener("change", () => {
        const selectedDate = new Date(datePicker.value);
        const now = new Date();
        if (selectedDate <= now) {
            countdownDisplay.textContent = "Please select a future date.";
            return;
        }
        const updateCountdown = () => {
            const currentTime = new Date();
            const difference = selectedDate - currentTime;

            if (difference <= 0) {
                countdownDisplay.textContent = "The selected date has arrived!";
                clearInterval(intervalId);
                return;
            }
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            countdownDisplay.textContent = `Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        };
        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);
    });
});

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
