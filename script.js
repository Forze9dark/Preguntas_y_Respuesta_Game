// Porcentaje mínimo de respuestas correctas para ganar
const MIN_CORRECT_PERCENTAGE = 50;

// Definir las preguntas y respuestas
const questions = [
    {
        question: "¿Cuánto es 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "¿Cuánto es 10 - 5?",
        options: ["3", "4", "5", "6"],
        answer: 2
    },
    {
        question: "¿Cual es el nombre de RD?",
        options: ["Repu Domi", "Republica Dominicana", "RepuDimon", "Dominicana Republica"],
        answer: 1
    },
    // Agrega más preguntas aquí
];

// Variables 
let currentQuestionIndex = 0;
let score = 0;

// Función para mostrar la pregunta y opciones de respuesta
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        li.appendChild(button);
        optionsElement.appendChild(li);
    });
}

// Función para verificar la respuesta seleccionada por el jugador
// Función para verificar la respuesta seleccionada por el jugador
// Función para verificar la respuesta seleccionada por el jugador
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.answer) {
        score++;
    }

    updateScore(); // Actualizar la puntuación en el DOM

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        // Se acabaron las preguntas, verificar el porcentaje de respuestas correctas
        const correctPercentage = (score / questions.length) * 100;

        if (correctPercentage >= MIN_CORRECT_PERCENTAGE) {
            displayWinScreen(); // Mostrar pantalla de victoria
        } else {
            displayLoseScreen(); // Mostrar pantalla de derrota
        }
    } else {
        // Mostrar la siguiente pregunta
        displayQuestion();
    }
}

// Función para actualizar la puntuación en el DOM
function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = "Puntuación: " + score;
}

// Función para mostrar la puntuación final

// Función para mostrar la pantalla de victoria
function displayWinScreen() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>¡Has ganado!</h2>
      <p>Puntuación final: ${score} / ${questions.length}</p>
      <p>¡Felicitaciones!</p>
    `;
}

// Función para mostrar la pantalla de derrota
function displayLoseScreen() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>¡Has perdido!</h2>
      <p>Puntuación final: ${score} / ${questions.length}</p>
      <p>Intenta de nuevo para mejorar tu puntuación.</p>
    `;
}


// Iniciar el juego mostrando la primera pregunta
displayQuestion();
