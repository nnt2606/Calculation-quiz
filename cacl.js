let generate;
let quiz;
let answer;

function question(){
    operators = ['+','-'];

    let question = '';
    let answer = '';
    a = Math.floor(Math.random()*11+1);
    b = Math.floor(Math.random()*11+1);
    i = Math.floor(Math.random() * operators.length);

    operator = operators[i];
    question = a  + operator+ b;
    console.log(question);

    if(i==0) answer = a+b;
    else answer = a-b;
    console.log("answer: "+answer);

    let arr = [question,String(answer)];
    return arr;
}


function play(){
    generate = question();
    quiz = generate[0];
    answer = generate[1];

    document.getElementById('question').innerHTML = quiz;
    document.getElementById('result').innerHTML = '';
    document.getElementById('answer').innerHTML = '';
    document.getElementById('input').value = '';
}

function input(){
    let ans = document.getElementById('input').value;
    document.getElementById('answer').innerHTML = '';
    if(ans.length === 0) {
        document.getElementById('result').innerHTML = "You haven't answered.";
    } else if(ans === answer) {
        document.getElementById('result').innerHTML = 'Your answer is correct!';
    } else{
        document.getElementById('result').innerHTML = 'Your answer is wrong!';
    }
}

function result(){
    document.getElementById('result').innerHTML = '';
    document.getElementById('answer').innerHTML = 'The correct answer is '+answer;
}

function clickPress(e){
    if((e && e.keyCode == 13) || e == 0) input();
}

play()