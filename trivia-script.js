// 3 questions that will be asked
const Questions =  [{
    q: "What is the main hockey trophy called?",
    a: [{text: "Stanley Cup" , isCorrect: true} ,
    {text: "The Commissioner's Trophy" , isCorrect: false} , 
    {text: "The Vince Lombardi Throphy" , isCorrect: false} 
     ]
},
{
    q: "Which one of these players plays the position of goalie?",
    a: [{text: "Wayne Gretzky" , isCorrect: false} ,
    {text: "Connor McDavid" , isCorrect: false} ,
    {text: "Henrik Lundqvist" , isCorrect: true} 
      ]
},
{
    q: "Where was the game of hockey invented?",
    a: [{text: "Russia" , isCorrect: false} ,
    {text: "Canada" , isCorrect: true} ,
    {text: "United States of America", isCorrect: false}
      ]
}
]
let currQuestion = 0
let score = 0
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML= ""
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicediv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicediv.appendChild(choice);
        choicediv.appendChild(choiceLabel);
        opt.appendChild(choicediv);
    }
}
loadQues();
function loadScore () {
    const totalScore = document.getElementById("score")
    totalScore.textContent =`You scored ${score} out of ${Questions.length} press refresh to try again!`
}

function nextQuestion() {
    if (currQuestion < Questions.length -1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name = "answer"]:checked').value);
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}



