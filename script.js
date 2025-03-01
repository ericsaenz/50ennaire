const Letters = ["A", "B", "C", "D"];

function hideElement(elementId) {
    document.getElementById(elementId).style.display = "none";
}

function showElement(elementId) {
    document.getElementById(elementId).style.display = "block";
}

function roll(n) {
    return Math.round(Math.random() * n);
}

function pick(list) {
    return list[roll(list.length - 1)];
}

function shuffle(originalList) {
    let list = originalList.slice(0);
    let shuffledList = [];
    let fullListLength = list.length;
    for (let i = 0; i < fullListLength; i++) {
        let index = roll(list.length - 1);
        shuffledList.push(list[index]);
        list.splice(index, 1);
    }
    return shuffledList;
}

let questions = [
    {
        question: "In Little Nightmares, what does your character to do the hidden gnomes you find throughout the game?"
        , correctAnswer: "Hug them"
        , otherAnswers: ["Eat them", "Take their hats", "Shine their shoes"]
    }
    , {
        question: "What is the name of the band that performs in Steamworld Heist?"
        , correctAnswer: "Steam Powered Giraffe"
        , otherAnswers: ["Old Gods of Asgard", "Inflatable Monkey", "The Spine"]
    }
    , {
        question: "In Beat Cop, what kind of recurring payment do you have to keep up with in order to avoid a game over?"
        , correctAnswer: "Alimony"
        , otherAnswers: ["College tuition debt", "Gambling debt", "Rent"]
    }
    , {
        question: "What key item do you use to defeat the final boss in Oceanhorn?"
        , correctAnswer: "A musical instrument"
        , otherAnswers: ["A magic mirror", "A telescope", "A remote control"]
    }
    , {
        question: "In Songbird Symphony, which bird is dressed up as a lumberjack for its song?"
        , correctAnswer: "Woodpecker"
        , otherAnswers: ["Magpie", "Owl", "Peacock"]
    }
    , {
        question: "In Tardy, it turns out that Ann, who was helping you throughout the game, was actually..."
        , correctAnswer: "Talking to you from the future"
        , otherAnswers: ["An advanced AI", "An alien", "A ghost"]
    }
    , {
        question: "In Tangle Tower, the painting found in front of the body appears to depict a character holding a bloody knife, but it is really... "
        , correctAnswer: "A feather"
        , otherAnswers: ["A shard of stained glass", "An elephant tusk", "An ice cream cone"]
    }
    , {
        question: "In Deadbolt, where do you get your missions from?"
        , correctAnswer: "The fireplace"
        , otherAnswers: ["The phone", "The air vent", "The toilet"]
    }
    , {
        question: "What is the end goal of The Touryst?"
        , correctAnswer: "To fly a rocket into space"
        , otherAnswers: ["To chart out every island", "To win the photography competition", "To win the volleyball competition"]
    }
    , {
        question: "How do you respawn in Stick it to the Man?"
        , correctAnswer: "You are printed out on a new piece of paper"
        , otherAnswers: ["A new you is grown in a cloning machine", "You are reassembled in a factory", "Time rewinds back to an earlier point"]
    }
    , {
        question: "A sequel in what genre is seemingly teased at the end of Narita Boy?"
        , correctAnswer: "Beat-em-up"
        , otherAnswers: ["Visual novel", "FPS", "Text adventure"]
    }
    , {
        question: "What happens if you land on a human's head in MO Astray?"
        , correctAnswer: "You possess them"
        , otherAnswers: ["They die", "They are cured of their parasitic infection", "You consume them and clone yourself"]
    }
    , {
        question: "How do you gain max health in Blue Fire?"
        , correctAnswer: "Complete isolated platforming challenges"
        , otherAnswers: ["Open specific chests", "Defeat bosses without getting hit", "Complete NPC sidequests"]
    }
    , {
        question: "Devil's Kiss, a game of this genre, is included with Lair of the Clockwork God, and contains a puzzle solution for the main game."
        , correctAnswer: "Visual novel"
        , otherAnswers: ["Beat-em-up", "FPS", "Text adventure"]
    }
    , {
        question: "What is the major plot twist at the end of Chicken Police?"
        , correctAnswer: "The villain's twin brother had been impersonating him"
        , otherAnswers: ["Your partner is the one who had been commiting the crimes", "The victim faked her death", "You are actually an actor playing a detective on a TV show"]
    }
    , {
        question: "Which of your body parts is severed at the beginning of Severed?"
        , correctAnswer: "Arm"
        , otherAnswers: ["Leg", "Ear", "Finger"]
    }
    , {
        question: "In Manifold Garden, what visual indicator corresponds to shifting gravity?"
        , correctAnswer: "The color of surfaces changes"
        , otherAnswers: ["The time of day changes, causing shadows to shift", "The arrows on every surface change directions", "The game's resolution increases or decreases"]
    }
    , {
        question: "What entity do you fight near the end of Everhood?"
        , correctAnswer: "The sun"
        , otherAnswers: ["The ocean", "The collective consciousness of every character", "The player"]
    }
    , {
        question: "What is your youngest daughter's main character trait in Yes, Your Grace?"
        , correctAnswer: "She loves animals"
        , otherAnswers: ["She is interested in dark magic", "She is a gifted musician", "She constantly tries to steal money"]
    }
    , {
        question: "In Scott Pilgrim vs. the World, how do coins indicate that they're about to despawn?"
        , correctAnswer: "They stop spinning"
        , otherAnswers: ["Their monetary value starts decreasing", "They change from gold to copper", "They have a bite taken out of them"]
    }
    , {
        question: "The events of Blossom Tales are contained by which frame narrative?"
        , correctAnswer: "An old man telling a story"
        , otherAnswers: ["The hero writing in a diary", "Actors performing on stage", "Children playing a tabletop game"]
    }
    , {
        question: "What kickstarts the plot of Wuppo?"
        , correctAnswer: "Getting kicked out of your apartment"
        , otherAnswers: ["A train getting hijacked", "An alien crash landing on your planet", "A mysterious archeological discovery"]
    }
    , {
        question: "In Merchant of the Skies, which creature can you stumble upon and then face in a music pattern guessing game?"
        , correctAnswer: "Octopus"
        , otherAnswers: ["Whale", "Turtle", "Genie"]
    }
    , {
        question: "Taking pictures of these causes you to get penalized in Umurangi Generation."
        , correctAnswer: "Jellyfish"
        , otherAnswers: ["Giant robots", "Protesters", "Advertisements"]
    }
    , {
        question: "Which historical figures appear at the end of the Lust circle in Dante's Inferno?"
        , correctAnswer: "Antony and Cleopatra"
        , otherAnswers: ["Helen and Paris", "Orpheus and Eurydice", "Napoleon and Josephine"]
    }
    , {
        question: "What happens if you drive into the lake in Lake?"
        , correctAnswer: "You teleport back to the post office"
        , otherAnswers: ["You lose all progress for that day", "Your truck gets towed back to shore by the fisherman", "You unlock a secret location"]
    }
    , {
        question: "What is the name of the first human you encounter in Ghost Song?"
        , correctAnswer: "Roper"
        , otherAnswers: ["Eryk", "Jarod", "Ramto"]
    }
    , {
        question: "What can you ride on for extra mobility in Tinykin?"
        , correctAnswer: "A bar of soap"
        , otherAnswers: ["A skateboard", "A toy truck", "A hamster ball"]
    }
    , {
        question: "In Road 96, what are the names of the pair of burglars you can come across while hitchhiking?"
        , correctAnswer: "Stan &amp; Mitch"
        , otherAnswers: ["Swain &amp; Randall", "Dan &amp; Ben", "Rosencrantz &amp; Guildenstern"]
    }
    , {
        question: "What does the mysterious substance in Beacon Pines do?"
        , correctAnswer: "Cause rapid aging"
        , otherAnswers: ["Cure all diseases", "Increase intelligence and brain capacity", "Grant superpowers to those who consume it"]
    }
    , {
        question: "How do you communicate with other creatures in Fe?"
        , correctAnswer: "Singing"
        , otherAnswers: ["Making shapes appear in the constellations above", "Telepathy", "Sign language"]
    }
    , {
        question: "Which of your relatives gets kidnapped at the beginning of Strikey Sisters?"
        , correctAnswer: "Your pet"
        , otherAnswers: ["Your brother", "Your father", "Your grandmother"]
    }
    , {
        question: "What affliction do the pilots suffer from in An Airport for Aliens Currently Run by Dogs?"
        , correctAnswer: "Drunkenness"
        , otherAnswers: ["Homesickness", "Vertigo", "Multiple Personality Disorder"]
    }
    , {
        question: "What icon appears on some screens in Elechead?"
        , correctAnswer: "Poop"
        , otherAnswers: ["Radioactive", "Bomb", "Broken heart"]
    }
    , {
        question: "In The Fall, how do you gain new abilities?"
        , correctAnswer: "Put yourself in danger"
        , otherAnswers: ["Steal them from the corpses of other robots", "Spend upgrade points in the mind tree", "Rescue human mechanics"]
    }
    , {
        question: "What animal does your boss dress up as in Yuppie Psycho to cause mischief?"
        , correctAnswer: "Frog"
        , otherAnswers: ["Rabbit", "Horse", "Giraffe"]
    }
    , {
        question: "In Norco, cult members have the same haircut and all call themselves this name."
        , correctAnswer: "Garrett"
        , otherAnswers: ["Stewart", "Lorian", "Kilgore"]
    }
    , {
        question: "Who voices the narrator in Sayonara Wild Hearts?"
        , correctAnswer: "Queen Latifah"
        , otherAnswers: ["Whoopi Goldberg", "Oprah Winfrey", "DaVine Joy Randolph"]
    }
    , {
        question: "What does your animal pal have the ability to do in Jusant?"
        , correctAnswer: "Grow nearby plants"
        , otherAnswers: ["Push out sections of the wall", "Restore your stamina", "Destroy nearby enemies"]
    }
    , {
        question: "In Super Sami Roll, as a bonus objective, each stage contains one of these collectibles."
        , correctAnswer: "Raspberry"
        , otherAnswers: ["Apple", "Cherry", "Bacon"]
    }
    , {
        question: "What does your slow-mo ability in Cyber Hook also do?"
        , correctAnswer: "Extend your hook's range"
        , otherAnswers: ["Make you jump farther", "Allow you to wall run for longer", "Give you infinite ammo"]
    }
    , {
        question: "What kind of doctor is the antagonist of Smile For Me?"
        , correctAnswer: "Dentist"
        , otherAnswers: ["Surgeon", "Veterinarian", "ENT"]
    }
    , {
        question: "What animal do you ride on at one point in Bramble?"
        , correctAnswer: "Hedgehog"
        , otherAnswers: ["Toad", "Salamander", "Tarantula"]
    }
    , {
        question: "In Hauntii, what can you upgrade besides your attack and health?"
        , correctAnswer: "Your dash's cooldown"
        , otherAnswers: ["Your walking speed", "The amount of time you can possess an enemy", "Currency drop rate"]
    }
    , {
        question: "What happens during the \"purge\" sections in Boltgun?"
        , correctAnswer: "You must defeat all enemies in an area to continue"
        , otherAnswers: ["You become invicible and are given infinite ammo for a short time", "You must get to the exit within a time limit", "All enemies do more damage than usual"]
    }
    , {
        question: "What is the name of Wright's fledgling wizard pal in RPG Time?"
        , correctAnswer: "Pot"
        , otherAnswers: ["Kip", "Milo", "Malcolm"]
    }
    , {
        question: "What was the title of the shoot-em-up we played?"
        , correctAnswer: "Hexapoda"
        , otherAnswers: ["Microfauna", "Decizoa", "Boltoguna"]
    }
    , {
        question: "What is the name of the player character in Stories Untold?"
        , correctAnswer: "James Aition"
        , otherAnswers: ["James Anderson", "James Sommerset", "James Sunderland"]
    }
    , {
        question: "In Turnip Boy Commits Tax Evasion, an NPC threw a phone off a cliff by doing what too hard?"
        , correctAnswer: "Dabbing"
        , otherAnswers: ["Sneezing", "Griddying", "Waving"]
    }
];

let currentQuestion;
let selectedAnswer;

function nextQuestion() {
    let questionIndex = roll(questions.length - 1);
    currentQuestion = questions[questionIndex];
    questions.splice(questionIndex, 1);
    document.getElementById("question").innerHTML = currentQuestion.question;
    document.getElementById("questionNumber").innerHTML++;

    let options = shuffle([...currentQuestion.otherAnswers, currentQuestion.correctAnswer]);
    for (let i = 0; i < options.length; i++)
        document.getElementsByClassName("answerText")[i].innerHTML = options[i];

    document.getElementById("message").innerHTML = "";
    deselectAll(true);
    hideElement("nextButton");
    showElement("questionAndAnswers");
    showElement("lifelines");
}

function startGame() {
    document.getElementById("totalQuestions").innerHTML = questions.length;
    hideElement("startButton");
    nextQuestion();
}

function deselectAll(clearAll) {
    for (let answer of document.getElementsByClassName("answerText")) {
        answer.parentElement.classList.remove("selected");
        if (clearAll) {
            answer.parentElement.classList.remove("correct");
            answer.parentElement.classList.remove("unselectable");
        }
    }
}

function selectAnswer(event) {
    let button = event.target instanceof HTMLButtonElement 
            ? event.target 
            : event.target.parentElement;
    if (button.classList.contains("unselectable") === false) {
        deselectAll(false);
        button.classList.add("selected");
        selectedAnswer = button.children[1].innerHTML;
        showElement("submitButton");
    }
}

function submitAnswer() {
    getCorrectAnswerElement().classList.add("correct");
    for (let element of document.getElementsByClassName("answerButton"))
        element.classList.add("unselectable");
    hideElement("submitButton");
    hideElement("lifelines");
    hideElement("poll");

    if (selectedAnswer === currentQuestion.correctAnswer) {
        if (+document.getElementById("questionNumber").innerHTML < document.getElementById("totalQuestions").innerHTML)
            showElement("nextButton");
        else
            document.getElementById("message").innerHTML = "You win!";
    }
    else {
        document.getElementsByClassName("selected")[0].classList.add("incorrect");
        document.getElementById("message").innerHTML = "GAME OVER";
    }
}

function getWrongAnswerElements() {
    let answers = [];
    for (let element of document.getElementsByClassName("answerText"))
        if (element.innerHTML !== currentQuestion.correctAnswer)
            answers.push(element.parentElement);
    return answers;
}

function getCorrectAnswerElement() {
    let answer;
    for (let element of document.getElementsByClassName("answerText"))
        if (element.innerHTML === currentQuestion.correctAnswer)
            answer = element.parentElement;
    return answer;
}

function use5050() {
    deselectAll(false);
    let elements = shuffle(getWrongAnswerElements());
    elements.splice(2);
    for (let element of elements) {
        element.children[1].innerHTML = "\x80";
        element.classList.add("unselectable");
    }
    hideElement("5050Button");
}

const MaxTimer = 60;
var timer = MaxTimer;
function usePollTheAudience() {
    hideElement("pollButton");
    showElement("poll");
    document.getElementById("message").innerHTML = "";
    let results = {
        "A": 0
        , "B": 0
        , "C": 0
        , "D": 0
    }

    let correctLetter = getCorrectAnswerElement().children[0].innerHTML;
    let selectPcts = {};
    selectPcts[correctLetter] = roll(document.getElementById("totalQuestions").innerHTML - document.getElementById("questionNumber").innerHTML + 1) + 29;
    let remainingPct = 100 - selectPcts[correctLetter];

    let count = 0;
    for (let letter of shuffle(Letters))
        if (letter !== correctLetter) {
            selectPcts[letter] = count < 2 ? roll(remainingPct - 3) + 1 : remainingPct;
            remainingPct-= selectPcts[letter];
            count++;
        }

    console.log(selectPcts)
    pollLoop(results, selectPcts);
    tickTimer();
}

function tickTimer() {
    document.getElementById("timer").innerHTML = `${--timer} seconds left`
    if (timer > 0)
        setTimeout(() => { tickTimer(); }, 1000);
}

function pollLoop(pollResults, selectPcts) {
    let votedLetter;
    let voteRoll = roll(99) + 1;
    let sum = 0;
    for (let letter of Letters) {
        sum += selectPcts[letter];
        if (voteRoll <= sum) {
            votedLetter = letter;
            break;
        }
    }
    pollResults[votedLetter]++;
    updatePollDisplay(pollResults);

    if (timer > 0)
        setTimeout(() => { pollLoop(pollResults, selectPcts); }, roll((Math.pow((timer - MaxTimer/2), 2) + 15) * 5));
}

function updatePollDisplay(pollResults) {
    let totalVotes = pollResults["A"] + pollResults["B"]
            + pollResults["C"] + pollResults["D"];
    document.getElementById("pollHeader").innerHTML = `Total votes: ${totalVotes}
            | <span id="timer">${timer} seconds left<span>`;
    for (let letter of Letters) {
        let count = pollResults[letter];
        let percent = Math.round((count/totalVotes) * 100);
        document.getElementById(`votes${letter}`).innerHTML =
                `${letter}|${"■".repeat(percent / 2.8)} ${count} (${percent}%)`;
    }
}

function crawl(text) {
    let newText = "";
    let delay = 50;
    if (text[0] !== '*') {
        document.getElementById("message").innerHTML += text[0];
        newText = text.substring(1);
        if (newText[0] === '*') 
            delay = 70 * (newText.substring(0, newText.indexOf('*', 1) + 1).length - 2);
    }
    else if (text.indexOf('*', 1) > 0) {
        let substring = text.substring(0, text.indexOf('*', 1) + 1);
        document.getElementById("message").innerHTML += substring
        newText = text.substring(substring.length);
        delay = 70 * (substring.length - 2);
    }

    if (newText.length > 0)
        setTimeout(() => { crawl(newText); }, delay);
}

function usePhoneAFriend() {
    hideElement("poll");
    hideElement("phoneButton")
    let questionText = currentQuestion.question;
    for (let element of document.getElementsByClassName("answerButton"))
        questionText += ` ${element.children[0].innerHTML}) ${element.children[1].innerHTML}`;
    let relationship = pick(["brother", "sister", "father", "mother", "aunt", "uncle", "friend", "cousin", "neighbor", "coworker", "grandmother", "grandfather"]);
    let nationality = pick(["American", "Canadian", "British", "Irish", "Scottish", "French", "Russian", "German", "Australian"
        , "Mexican", "Japanese", "Chinese", "Indian", "Jamaican", "Armenian", "African", "Italian", "Greek", "Norweigan", "Polish"
        , "Egyptian", "Saudi Arabian", "Moroccan", "Vietnamese", "Brazilian", "Korean"
    ]);
    let personality = pick(["quirky", "redneck", "hillbilly", "posh", "jock", "sarcastic", "young and hip", "alien"
        , "nerd", "emo", "military", "evil", "mean", "bully", "dramatic", "shy", "pedantic", "elderly", "caveman"
        , "depressed", "sunny", "born again Christian", "wordy", "childish", "edgy", "pirate", "musical", "songwriter"
        , "surfer", "cowboy", "sassy", "hyperactive", "idiot", "poetic", "hardcore", "rhyming", "haiku writing",
        "rapper", "jokester", "stand up comedian", "chef"]);
    questionText += ` Explain your reasoning and pretend you are my ${relationship}. 
        Your core personality trait is ${personality}. Speak in English with a sterotypical ${nationality} accent, using slang from your first language. 
        Do not use emojis. Speak with extremely poor grammar. 
        Say how certain you are that your answer is correct. Don't be afraid to be uncertain.
        Greet me before answering specifically with your first name and where you're calling from.
        I am a male. Keep the response within 500 characters. You may use abbreviations to save space.`;
    console.log(questionText);
    document.getElementById("message").innerHTML = `Calling your ${relationship}... <br>`

    let data = JSON.stringify({
      "temperature": 1.0,
      "messages": [{
        "role": "user",
        "content": questionText
      }],
      "model": "gpt-4o-mini"
    });
    
    let config = {
      method: 'post',
      url: 'https://api.openai.com/v1/chat/completions',
      headers: { 
        'Authorization': 'Bearer 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', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response);
      crawl(response.data.choices[0].message.content + " *click*");
    })
    .catch((error) => {
      console.log(error);
    });
};
