var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName=readlineSync.question(chalk.blue("what's your name? "))
console.log("WELCOME, "+ chalk.bgCyanBright.bold.blue (userName)+" to HOW WELL DO YOU KNOW "+ chalk.bold.blue.bgCyanBright('BREAKING BAD')+"?")

var score=0
var highScore=[{
 name: "raghav",
 score: 6
 
},{
 name: "aayush",
 score: 5
}]

function play(question,answer){
 var userAnswer= readlineSync.question(chalk.cyanBright(question))

 if(userAnswer.toUpperCase()===answer.toUpperCase()){
   console.log(chalk.italic.green("you are right!"))
   score=score+1

 }else{
   console.log(chalk.italic.red("you are wrong!"))
 }
 console.log(chalk.whiteBright("current score:"+ score))
 console.log("-----------")
 

}

var questions=[{
 question:"How many episodes of Breaking Bad were aired?\n a)61 \n b)62 \n c)63 \n d)64 \n",
 answer: "b"
},{
 question:"What is Gus Fring’s henchman Mike’s surname? ",
 answer:"Ehrmantraut"

},{
 question:"What is the name of the highest ever rated episode of breaking bad on imdb? ",
 answer:"Ozymandias"
},{
 question:"what is the name of the plant Walt used to poison the child? ",
 answer:"Lily of the valley"



},{
 question:"What is Gus Fring’s nationality? ",
 answer: "Chilean"
 },{
   question:"Which food does Walt infamously throw onto the roof of his house? ",
 answer: "pizza"
 },{
   question:"What did Jesse call the RV where their first cooks took place? ",
 answer: "the crystal ship"
 },{
   question:"What is the slogan of Saul Goodman's law firm in 'Breaking Bad'? ",
   answer:"better call saul"
 }]

for(var i=0;i<questions.length;i++){
 var currentQuestion= questions[i]
 play(currentQuestion.question,currentQuestion.answer) 
}

console.log("yay! you scored: "+ score)
console.log("the high scorers are: ")
highScore.map(score => console.log(score.name, " : ", score.score))



