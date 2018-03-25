let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
var message = document.getElementById('message');
var code = document.getElementById('code');



function guess() {
    let input = document.getElementById('user-guess');
    if(!validateInput(input.value)){
      return false
    } else {
        attempt += 1;
        if(attempt > 10) {
          setMessage("SORRY! OUT OF GUESSES!");
          return;
        }
        //console.log("Another Attempt", attempt)
        getResults(input.value)
    }
    //console.log(answer, attempt)
    input.value = '';
    if(attempt =='' || answer=='') {
      setHiddenFields(9999);
      //console.log("everything empty")
    }
    //add functionality to guess function here
}

function setHiddenFields(max) {
  attempt = 0;
  answer = Math.floor(Math.random() * Math.floor(max));
  answer = answer.toString();
  if(answer.length < 4) {
    while(answer.length < 4) {
      answer = '0' + answer
    }
  }
  //console.log("New Answer", answer, "Attempts", attempt);
}

var setMessage = function(msg) {
  message.innerHTML = msg;
}

function validateInput(inp) {
  if(inp.length != 4) {
    setMessage("Guess must be exactly 4 characters long");
    return false
  } else return true
}
function getResults(textinput) {
  rzarr = compare(textinput, answer);
  resultSpace = document.getElementById('results');
  resultSpace.innerHTML +='<div class="row"><span class="col-md-6">' + textinput + '</span><div class="clues col-md-6">' + rzarr + '</div>';
  if(textinput == answer) {
    setMessage("CORRECT! YOU WIN!")
    code.innerHTML = answer;
  }
}

function compare(inp, ans) {
  var resultArr = '';
  for(var i=0;i<4;i++) {
    if(ans.indexOf(inp.charAt(i)) > -1) {
      if(inp.charAt(i) == ans.charAt(i)) {
        resultArr += '<span class="glyphicon glyphicon-ok"></span>'
        continue;
      }
      else {
        resultArr += '<span class="glyphicon glyphicon-transfer"></span>'
        continue;
      }
    } else {
        resultArr += '<span class="glyphicon glyphicon-remove"></span>';
        continue;
    }
  }
  return resultArr;
}

setHiddenFields(9999)
//implement new functions here
