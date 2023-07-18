//DOM ELEMENTS

const choices = Array.from(document.getElementsByClassName('choice-text'));
const choiceOptions = document.getElementsByClassName('choice-container');
const startHighscores = document.getElementById('start-highscores');
const congratulations = document.getElementById('congratulations');
const progressBarFull = document.getElementById('progressBarFull');
const errorMessage = document.getElementById('errorMessage');
const progressText = document.getElementById('progressText');
const submitScore = document.getElementById('submit-score');
const checkScores = document.getElementById('checkscores');
const finalScore = document.getElementById('final-score');
const highscores = document.getElementById('highscores');
const entrance = document.getElementById('entrance');
const gameplay = document.getElementById('gameplay');
const question = document.getElementById('question');
const scoreText = document.getElementById('score');
const email = document.getElementById('email');
const start = document.getElementById('start');
const table = document.querySelector('table');
const user = document.getElementById('name');

// GAME VARIABLES

let canPlay = true;
let currentQuestion = {};
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
let topPlayers = JSON.parse(localStorage.getItem('highScores')) || [];
let originalQuestions = [...questions];

// FUNCTIONS

/**
 * Show the gameplay when user clicks on button
 */
function showGame(){
    entrance.classList.add('hide');
    gameplay.classList.remove('hide');
    startGame();
}

/**
 * Structure the game when the user starts the game
 */
function startGame() {
    canPlay= true;
    progressText.textContent = `Question ${questionCounter}/10`;
    questionCounter = 1;
    score = 0;
    questions = [...originalQuestions];
    runGame();
}

/**
 * Populates the game with a random question and its options
 */
function runGame() {
    scoreText.textContent = `${score}`;
    progressText.textContent = `Question ${questionCounter}/10`;
    progressBarFull.style.width = `${questionCounter * 10}%`;

    const index = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[index];

    question.innerHTML = currentQuestion.question;
    let answers = [...currentQuestion.incorrect_answers];
    let correctAnswer = currentQuestion.correct_answer;
    answers.push(correctAnswer);

    answers = shuffleArray(answers);

    for (let i = 0; i < choices.length; i++) {
        choices[i].innerHTML = answers[i];
    }

    questions.splice(index, 1);
}

/**
 * Fisher Yates Shuffle used to make the right answer to show randomly in one of the four options avaliable
 * @param {array} array 
 * @returns array
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Checks if the choice chosen by the user is the correct one or not and adds a class to show to the user if the answer was the correct one
 * @param {answer} answer 
 */
function checkAnswer(answer) {
    const selectedChoice = Array.from(choiceOptions).find(function(option) {
        return option.querySelector('.choice-text').innerHTML === answer;
    });

    if (answer === currentQuestion.correct_answer) {
        selectedChoice.querySelector('.choice-text').classList.add('correct');
        score += 10;
    } else {
        selectedChoice.querySelector('.choice-text').classList.add('incorrect');
    }

    setTimeout(() => {
        selectedChoice.querySelector('.choice-text').classList.remove('correct', 'incorrect');
        questionCounter++;

        if (questionCounter <= 10) {
            canPlay = true;
            runGame();
        } else {
            localStorage.setItem('mostRecentScore', score);
            endGame();
        }
    }, 1000);
}

/**
 * Takes the user to the highscores part of the page if the user clicks on button
 */
function seeScores(){
    entrance.classList.add('hide');
    highscores.classList.remove('hide');
    congratulations.classList.add('hide-child');
    populateScores();
    startGame();
}

/**
 * When user answer 10 random questions, they are taken to the highscores part of the page
 */
function endGame(){
    gameplay.classList.add('hide');
    highscores.classList.remove('hide');
    congratulations.classList.remove('hide-child');
    populateScores();
    let mostRecentScore = localStorage.getItem('mostRecentScore');
    finalScore.innerHTML = mostRecentScore;
}

/**
 * Structure to allow the user to push their score to the topscores table, if they are on the top five
 * @param {event} event 
 */
function addUserScore (event) {
    event.preventDefault();

    errorMessage.innerHTML = "";

    let newScore = {
        'name': user.value.trim(),
        'email': email.value.trim(),
        'score': finalScore.textContent
    };

    if (user.value.trim() !== "" && email.value.trim() !== "") {

        topPlayers.push(newScore);

        topPlayers.sort(function(a, b){
            return b.score - a.score;
        });
        
        topPlayers.splice(5);
        localStorage.setItem('highScores', JSON.stringify(topPlayers));
        
        const list = document.createElement('tbody');
        
        table.innerHTML ="";
        
        for(let player of topPlayers){
            const row = document.createElement('tr');
            row.innerHTML = `<td>${player.name}</td><td>${player.score}</td>`;
            list.appendChild(row);
        }

        table.appendChild(list);
        congratulations.classList.add('hide-child');
    } else {
        errorMessage.classList.add('error-padding');
        errorMessage.innerHTML = "Please fill in all fields";
    }
}


/**
 * Provides content to the table even if there are no scores
 */
function populateScores(){
    const list = document.createElement('tbody');

    if (topPlayers.length > 0) {
        for (let player of topPlayers){
            const row = document.createElement('tr');
            row.innerHTML = `<td>${player.name}</td><td>${player.score}</td>`;
            list.appendChild(row);
        }
    } else {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan='2'>No scores yet!</td>`;
            list.appendChild(row);
        }


    while (table.firstChild) {
        table.firstChild.remove();
    }

    table.appendChild(list);
}


//EVENT LISTENERS

start.addEventListener('click', showGame);
startHighscores.addEventListener('click', showGame);
checkScores.addEventListener('click', seeScores);
submitScore.addEventListener('submit', addUserScore);
for (let button of choiceOptions) {
    button.addEventListener('click', function() {
        if (canPlay){
            canPlay = false;
            let selectedAnswer = this.querySelector('.choice-text').innerHTML;
            checkAnswer(selectedAnswer);
        }
    });
}