const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const choiceOptions = document.getElementsByClassName('choice-container');
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 1;
let questions = [
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In a standard set of playing cards, which is the only king without a moustache?",
        "correct_answer": "Hearts",
        "incorrect_answers": [
            "Spades",
            "Diamonds",
            "Clubs"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which river flows through the Scottish city of Glasgow?",
        "correct_answer": "Clyde",
        "incorrect_answers": [
            "Tay",
            "Dee",
            "Tweed"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Rolex is a company that specializes in what type of product?",
        "correct_answer": "Watches",
        "incorrect_answers": [
            "Cars",
            "Computers",
            "Sports equipment"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "A doctor with a PhD is a doctor of what?",
        "correct_answer": "Philosophy",
        "incorrect_answers": [
            "Psychology",
            "Phrenology",
            "Physical Therapy"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following Ivy League universities has its official motto in Hebrew as well as in Latin?",
        "correct_answer": "Yale University",
        "incorrect_answers": [
            "Princeton University",
            "Harvard University",
            "Columbia University"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is a &quot;dakimakura&quot;?",
        "correct_answer": "A body pillow",
        "incorrect_answers": [
            "A Chinese meal, essentially composed of fish",
            "A yoga posture",
            "A word used to describe two people who truly love each other"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of these companies does NOT manufacture automobiles?",
        "correct_answer": "Ducati",
        "incorrect_answers": [
            "Nissan",
            "GMC",
            "Fiat"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What did the Spanish autonomous community of Catalonia ban in 2010, that took effect in 2012?",
        "correct_answer": "Bullfighting",
        "incorrect_answers": [
            "Fiestas",
            "Flamenco",
            "Mariachi"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the romanized Russian word for &quot;winter&quot;?",
        "correct_answer": "Zima",
        "incorrect_answers": [
            "Leto",
            "Vesna",
            "Osen&#039;"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the name of the popular animatronic singing fish prop, singing such hits such as &quot;Don&#039;t Worry, Be Happy&quot;?",
        "correct_answer": "Big Mouth Billy Bass",
        "incorrect_answers": [
            "Big Billy Bass",
            "Singing Fish",
            "Sardeen"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "According to the United States&#039; CDC, one in how many Americans die annually due to smoking?",
        "correct_answer": "Five",
        "incorrect_answers": [
            "Twenty",
            "Ten",
            "One hundred"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is a dead mall?",
        "correct_answer": "A mall with high vacancy rates or low consumer foot traffic",
        "incorrect_answers": [
            "A mall with no stores",
            "A mall that has been condemed",
            "A mall after business hours"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Amsterdam Centraal station is twinned with what station?",
        "correct_answer": "London Liverpool Street",
        "incorrect_answers": [
            "Frankfurt (Main) Hauptbahnhof",
            "Paris Gare du Nord",
            "Brussels Midi"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following carbonated soft drinks were introduced first?",
        "correct_answer": "Dr. Pepper",
        "incorrect_answers": [
            "Coca-Cola",
            "Sprite",
            "Mountain Dew"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What year was Apple Inc. founded?",
        "correct_answer": "1976",
        "incorrect_answers": [
            "1978",
            "1980",
            "1974"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In a 1994 CBS interview, Microsoft co-founder Bill Gates performed what unusual trick on camera?",
        "correct_answer": "Jumping over an office chair",
        "incorrect_answers": [
            "Jumping backwards over a desk",
            "Standing on his head",
            "Typing on a keyboard during a handstand"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What was the original name of the search engine &quot;Google&quot;?",
        "correct_answer": "BackRub",
        "incorrect_answers": [
            "CatMassage",
            "SearchPro",
            "Netscape Navigator"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the star sign of someone born on Valentines day?",
        "correct_answer": "Aquarius",
        "incorrect_answers": [
            "Pisces",
            "Capricorn",
            "Scorpio"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In ancient Greece, if your job were a &quot;hippeus&quot; which of these would you own?",
        "correct_answer": "Horse",
        "incorrect_answers": [
            "Weave",
            "Guitar",
            "Boat"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Frank Lloyd Wright was the architect behind what famous building?",
        "correct_answer": "The Guggenheim",
        "incorrect_answers": [
            "Villa Savoye",
            "Sydney Opera House",
            "The Space Needle"
        ]
    }
];

function startGame() {
    score = 0;
    progressText.textContent = `Question ${questionCounter}/10`;
    runGame();
}

function runGame() {
    const index = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[index];

    question.innerHTML = currentQuestion.question;
    let answers = [...currentQuestion.incorrect_answers];
    let correctAnswer = currentQuestion.correct_answer;
    answers.push(correctAnswer);

    answers = shuffleArray(answers);

    for (i = 0; i < choices.length; i++) {
        choices[i].innerHTML = answers[i];
    }

    questions.slice(index, 1);
};

// Fisher Yates Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

for (let button of choiceOptions) {
    button.addEventListener('click', function() {
        let selectedAnswer = this.querySelector('.choice-text').innerHTML;
        checkAnswer(selectedAnswer);
    })
}

function checkAnswer(answer) {
    if (answer === currentQuestion.correct_answer){
        console.log('correct');
    } else {
        console.log('incorrect');
    }
    getNewQuestion();
}

function getNewQuestion() {
    questionCounter += 1;
    runGame();
}

startGame();