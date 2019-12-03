
// age in days

function ageInDays(){
var birthYear = prompt("what year were you born?");
var TotalDays = (2019 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + TotalDays + ' days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}


// generate cat

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat");
    image.src = "suit.jpg";
    div.appendChild(image);
}


function reset1(){
    document.getElementById('flex-cat').remove();
}

function rpsGame(yourChoice){

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randInt());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ["rock", "longMonay", "scissor"][number];
}


function decideWinner(yourChoice, botChoice){
    var rpsDatabase = {
        "rock" : {"scissor" : 1, "rock": 0.5, "longMoney": 0},
        "longMoney": {"rock": 1, "longMoney": 0.5, "scissor": 0},
        "scissor": {"longMoney": 1, "scissor": 0.5, "rock": 0},
    };
    var yourScore = rpsDatabase[yourChoice][botChoice];
    var compScore = rpsDatabase[botChoice][yourChoice];
    return [yourScore, compScore];

}

 function finalMessage([yourScore, compScore]){
     if (yourScore === 0){
         return {'message': "You loss", 'color': "red"};
     } 
     else if (yourScore === 0.5){
         return {'message': "You tied", "color": "yellow"};
     } else { return {'message': "You won", "color": "green"};

     }
    }

    function rpsFrontEnd(humanImage, botImage, finalMessage){
        var imagesDb = {
            'rock': document.getElementById('rock').src,
            'longMoney': document.getElementById('longMoney').src,
            'scissor': document.getElementById('scissor').src
        }

        document.getElementById('rock').remove();
        document.getElementById('longMoney').remove();
        document.getElementById('scissor').remove();

        var humanDiv = document.createElement("div");
        var botDiv = document.createElement("div");
        var messageDiv = document.createElement("div");

        humanDiv.innerHTML = "<img src=" + imagesDb[humanImage] + "height= 150 width= 150>"
        messageDiv.innerHTML = "<h1 style= color: " + finalMessage['color'] + "; font-size=60px; >" + finalMessage['message'] + "</h1>"
        botDiv.innerHTML = "<img src=" + imagesDb[botImage] + "height= 150 width= 150>"
    

            document.getElementById('flex-box-rps-div').appendChild(humanDiv);
            document.getElementById('flex-box-rps-div').appendChild(botDiv);
            document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    }