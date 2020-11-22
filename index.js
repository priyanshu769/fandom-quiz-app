// list of questions

var questionOne = {
    question: "Is Prince of Persia, a story game?\n",
    answer: "yes"
  }
  var questionTwo = {
    question: "Which company owns the game 'GTA 5'?\n",
    answer: "rockstar games"
  }
  var questionThree = {
    question: "Is PUBG a chinese game?\n",
    answer: "no"
  }
  var questionFour = {
    question: "Which year 'Cyberpunk 2077' is releasing?\n",
    answer: "2021"
  }
  var questionFive = {
    question: "Who is playing the lead role in 'Cyberpunk 2077'?\n",
    answer: "keanu reeves"
  }
  
  var questionAnswer = [questionOne, questionTwo, questionThree, questionFour, questionFive];
  
  function period(){
    console.log(chalk.blue("----------------------"))
  }
  
  var readlineSync = require("readline-sync");
  
  var chalk = require("chalk")
  
  var score = 0;
  
  var userName = readlineSync.question("What's your name?\n");
  
  console.log("Aah, lovely! Welcome " + userName + ".");
  period()
  
  chooseToPlay();
  
  function chooseToPlay(){
  
    var wantToPlay = readlineSync.question("Here's a quiz by Priyanshu, gamers would love. Do you want to play?\n");
    
    if (wantToPlay === "yes" || "Yes") {
      period()
      console.log(chalk.cyan("Yay! Let's complete the game."))
      period();
      question();
    } else if (wantToPlay != "yes" || "Yes") {
      period()
      console.log(chalk.yellow("I wish you played this game, sorry to see you go."))
    }
  };
  
  
  function playQuiz (question, answer){
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toLowerCase() === answer.toLowerCase()){
      
      console.log(chalk.green("You got the answer right."))
      score = score + 1
    } else {
      
      console.log(chalk.red("You messed-up."))
      console.log(chalk.bgRed("The correct answer is " + answer + "."))
      score = score - 1
    }
    
    console.log("Your score is " + score + ".")
    period()
    period()
  }
  
  function question (){
    for (var i=0; i<questionAnswer.length; i++){
      currentTarget = questionAnswer[i];
      playQuiz(currentTarget.question, currentTarget.answer);
    }
  }
  
  console.log(chalk.blueBright.bold("Your final score is " + score + "."))
  period()
  console.log(chalk.bgYellow("Share this quiz with you friends and also tell me your score."))
  period()
  console.log("Tweet your score's screenshot to me: " + chalk.bgCyan(" @priyanshu769 "))
  console.log("I'll add it here.")
  period()
  
  var highScore = [{
    name: "Priyanshu",
    score: 5},
    {
      name: "Sam",
      score: 3
    },
    {
      name: "Priyam",
      score: 3
    },
    {
      name: "Ankit",
      score: 2
    },
    {
      name: "Amit",
      score: 2
    },
  ]
  
    console.log(chalk.italic("All the high scores."))
    period()
  
  for (var i = 0; i < highScore.length; i++){
      console.log(highScore[i].name, ":", highScore[i].score);
    }
  