let computerMove = '';
let score = {
    win:0,
    loss:0,
    tie:0
}

function randomNumber(){
    let randomValue = Math.random();
    console.log(randomValue)

    if(randomValue <=0.3){
        computerMove = 'Rock';
        console.log('Rock');
    }
    else if(0.3 < randomValue && randomValue <= 0.7){
        computerMove = 'Paper';
        console.log('Paper');
    }
    else{
        computerMove = 'Scissor';
        console.log('Scissor ');
    }
}

let youChoseElm = document.querySelector('#your-choice')
let computerChoseElm = document.querySelector('#computer-choice')

function chosenResult(playerMove){
    let youchoseImage = `<img id="${playerMove.toLowerCase()}-image" src="img/${playerMove.toLowerCase()}.png" width="80px" height="80px">`;
    youChoseElm.innerHTML = `You Chose: ${youchoseImage}`;

    let computerChoseImage = `<img id="${computerMove.toLowerCase()}-image" src="img/${computerMove.toLowerCase()}.png" width="80px" height="80px">`;
    
    computerChoseElm.innerHTML = `Computer Chose: ${computerChoseImage}`;
}

function playerMoveRock(playerMove){
    randomNumber()
    chosenResult(playerMove)
    if(playerMove === computerMove){
        console.log('Tie')
        score.tie += 1;
    }
    else if(computerMove === 'Paper'){
        console.log('You Lose')
        score.loss += 1;
    }
    else if(computerMove === 'Scissor'){
        console.log('You Win')
        score.win += 1;
    }
    updateResult()
}

function playerMovePaper(playerMove){
    randomNumber()
    chosenResult(playerMove)

    if(playerMove === computerMove){
        console.log('Tie')
        score.tie += 1;
    }
    else if(computerMove === 'Scissor'){
        console.log('You Lose')
        score.loss += 1;
    }
    else if(computerMove === 'Rock'){
        console.log('You Win')
        score.win += 1;
    }
    updateResult()

}

function playerMoveScissor(playerMove){
    randomNumber()
    chosenResult(playerMove)

    if(playerMove === computerMove){
        console.log('Tie')
        score.tie += 1;
    }
    else if(computerMove === 'Rock'){
        console.log('You Lose')
        score.loss += 1;
    }
    else if(computerMove === 'Paper'){
        console.log('You Win')
        score.win += 1;
    }
    updateResult()

}

let winElm = document.querySelector('#win-result')
let lossElm = document.querySelector('#loss-result')
let tieElm = document.querySelector('#tie-result')
let resultElm = document.querySelector('#result')

function updateResult(){
    winElm.innerText = `Wins:${score.win}`;
    lossElm.innerText = `Losses:${score.loss}`;
    tieElm.innerText = `Ties:${score.tie}`;
    
    resultElm.innerText = `Result:`
}
