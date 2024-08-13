const questions = [
{
    question: "Which is the largest animal in the world?",
    answers:[
        {Text: "Blue whale",correct:true},
        {Text: "Shark",correct:false},
        {Text: "Elephant",correct:false},
        {Text: "Giraffe",correct:false},
    ]
},
{
    "question": "Which planet is known as the Red Planet?",
    "answers": [
        { "Text": "Mars", "correct": true },
        { "Text": "Venus", "correct": false },
        { "Text": "Jupiter", "correct": false },
        { "Text": "Saturn", "correct": false }
    ]
},
{
    "question": "What is the capital of France?",
    "answers": [
        { "Text": "Paris", "correct": true },
        { "Text": "London", "correct": false },
        { "Text": "Berlin", "correct": false },
        { "Text": "Madrid", "correct": false }
    ]
},
{
    "question": "Who wrote 'Romeo and Juliet'?",
    "answers": [
        { "Text": "William Shakespeare", "correct": true },
        { "Text": "Mark Twain", "correct": false },
        { "Text": "Charles Dickens", "correct": false },
        { "Text": "Jane Austen", "correct": false }
    ]
},
{
    "question": "Which element has the chemical symbol 'O'?",
    "answers": [
        { "Text": "Oxygen", "correct": true },
        { "Text": "Gold", "correct": false },
        { "Text": "Osmium", "correct": false },
        { "Text": "Oganesson", "correct": false }
    ]
},
{
    "question": "What is the fastest land animal?",
    "answers": [
        { "Text": "Cheetah", "correct": true },
        { "Text": "Lion", "correct": false },
        { "Text": "Horse", "correct": false },
        { "Text": "Kangaroo", "correct": false }
    ]
},
{
    "question": "Which is the smallest ocean in the world?",
    "answers": [
        { "Text": "Arctic Ocean", "correct": true },
        { "Text": "Indian Ocean", "correct": false },
        { "Text": "Atlantic Ocean", "correct": false },
        { "Text": "Southern Ocean", "correct": false }
    ]
},
{
    "question": "What is the hardest natural substance on Earth?",
    "answers": [
        { "Text": "Diamond", "correct": true },
        { "Text": "Iron", "correct": false },
        { "Text": "Gold", "correct": false },
        { "Text": "Silver", "correct": false }
    ]
},
{
    "question": "Which country is home to the kangaroo?",
    "answers": [
        { "Text": "Australia", "correct": true },
        { "Text": "South Africa", "correct": false },
        { "Text": "India", "correct": false },
        { "Text": "Brazil", "correct": false }
    ]
},
{
    "question": "Which is the largest continent by land area?",
    "answers": [
        { "Text": "Asia", "correct": true },
        { "Text": "Africa", "correct": false },
        { "Text": "North America", "correct": false },
        { "Text": "Europe", "correct": false }
    ]
},
{
    "question": "Which famous scientist developed the theory of general relativity?",
    "answers": [
        { "Text": "Albert Einstein", "correct": true },
        { "Text": "Isaac Newton", "correct": false },
        { "Text": "Nikola Tesla", "correct": false },
        { "Text": "Galileo Galilei", "correct": false }
    ]
},
{
    "question": "Which is the tallest mountain in the world?",
    "answers": [
        { "Text": "Mount Everest", "correct": true },
        { "Text": "K2", "correct": false },
        { "Text": "Kangchenjunga", "correct": false },
        { "Text": "Lhotse", "correct": false }
    ]
},
{
    "question": "Which is the longest river in the world?",
    "answers": [
        { "Text": "Nile", "correct": true },
        { "Text": "Amazon", "correct": false },
        { "Text": "Yangtze", "correct": false },
        { "Text": "Mississippi", "correct": false }
    ]
},
{
    "question": "What is the main ingredient in guacamole?",
    "answers": [
        { "Text": "Avocado", "correct": true },
        { "Text": "Tomato", "correct": false },
        { "Text": "Onion", "correct": false },
        { "Text": "Lime", "correct": false }
    ]
},
{
    "question": "Which is the most widely spoken language in the world?",
    "answers": [
        { "Text": "Mandarin Chinese", "correct": true },
        { "Text": "Spanish", "correct": false },
        { "Text": "English", "correct": false },
        { "Text": "Hindi", "correct": false }
    ]
},
{
    "question": "Who painted the Mona Lisa?",
    "answers": [
        { "Text": "Leonardo da Vinci", "correct": true },
        { "Text": "Vincent van Gogh", "correct": false },
        { "Text": "Pablo Picasso", "correct": false },
        { "Text": "Claude Monet", "correct": false }
    ]
},
{
    "question": "What is the chemical symbol for water?",
    "answers": [
        { "Text": "H2O", "correct": true },
        { "Text": "O2", "correct": false },
        { "Text": "CO2", "correct": false },
        { "Text": "HO", "correct": false }
    ]
},
{
    "question": "Which planet is the hottest in our solar system?",
    "answers": [
        { "Text": "Venus", "correct": true },
        { "Text": "Mercury", "correct": false },
        { "Text": "Mars", "correct": false },
        { "Text": "Jupiter", "correct": false }
    ]
},
{
    "question": "Which organ is responsible for pumping blood throughout the body?",
    "answers": [
        { "Text": "Heart", "correct": true },
        { "Text": "Liver", "correct": false },
        { "Text": "Lungs", "correct": false },
        { "Text": "Kidneys", "correct": false }
    ]
},
{
    "question": "Which animal is known for its ability to change colors?",
    "answers": [
        { "Text": "Chameleon", "correct": true },
        { "Text": "Octopus", "correct": false },
        { "Text": "Cuttlefish", "correct": false },
        { "Text": "Squid", "correct": false }
    ]
},
{
    "question": "Which is the only mammal capable of true flight?",
    "answers": [
        { "Text": "Bat", "correct": true },
        { "Text": "Eagle", "correct": false },
        { "Text": "Penguin", "correct": false },
        { "Text": "Ostrich", "correct": false }
    ]
},
{
    "question": "Which is the smallest planet in our solar system?",
    "answers": [
        { "Text": "Mercury", "correct": true },
        { "Text": "Venus", "correct": false },
        { "Text": "Mars", "correct": false },
        { "Text": "Pluto", "correct": false }
    ]
},
{
    "question": "Who was the first person to walk on the moon?",
    "answers": [
        { "Text": "Neil Armstrong", "correct": true },
        { "Text": "Buzz Aldrin", "correct": false },
        { "Text": "Yuri Gagarin", "correct": false },
        { "Text": "John Glenn", "correct": false }
    ]
},
{
    "question": "Which ocean is the deepest?",
    "answers": [
        { "Text": "Pacific Ocean", "correct": true },
        { "Text": "Atlantic Ocean", "correct": false },
        { "Text": "Indian Ocean", "correct": false },
        { "Text": "Southern Ocean", "correct": false }
    ]
},
{
    "question": "What is the largest organ in the human body?",
    "answers": [
        { "Text": "Skin", "correct": true },
        { "Text": "Liver", "correct": false },
        { "Text": "Heart", "correct": false },
        { "Text": "Lungs", "correct": false }
    ]
},
{
    "question": "What is the capital city of Japan?",
    "answers": [
        { "Text": "Tokyo", "correct": true },
        { "Text": "Kyoto", "correct": false },
        { "Text": "Osaka", "correct": false },
        { "Text": "Nagoya", "correct": false }
    ]
},
{
    "question": "Who discovered penicillin?",
    "answers": [
        { "Text": "Alexander Fleming", "correct": true },
        { "Text": "Marie Curie", "correct": false },
        { "Text": "Louis Pasteur", "correct": false },
        { "Text": "Robert Koch", "correct": false }
    ]
},
{
    "question": "Which country is known as the Land of the Rising Sun?",
    "answers": [
        { "Text": "Japan", "correct": true },
        { "Text": "China", "correct": false },
        { "Text": "Thailand", "correct": false },
        { "Text": "South Korea", "correct": false }
    ]
},
{
    "question": "What is the main ingredient in traditional sushi?",
    "answers": [
        { "Text": "Rice", "correct": true },
        { "Text": "Noodles", "correct": false },
        { "Text": "Bread", "correct": false },
        { "Text": "Lettuce", "correct": false }
    ]
},
{
    "question": "Which famous ship sank on its maiden voyage in 1912?",
    "answers": [
        { "Text": "Titanic", "correct": true },
        { "Text": "Lusitania", "correct": false },
        { "Text": "Britannic", "correct": false },
        { "Text": "Olympic", "correct": false }
    ]
},
{
    "question": "What type of galaxy is the Milky Way?",
    "answers": [
        { "Text": "Spiral", "correct": true },
        { "Text": "Elliptical", "correct": false },
        { "Text": "Irregular", "correct": false },
        { "Text": "Lenticular", "correct": false }
    ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}
else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = "true";
});
nextButton.style.display="block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
}
else{
    showScore();
}
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }
    else{
        startQuiz();
    }
});
startQuiz();


