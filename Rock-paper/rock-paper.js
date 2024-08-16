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
    let htmlImage = '<img id="rock-image" src="img\rock.png" width="150px" height="150px">'
    youChoseElm.innerHTML = `You Chose: ${htmlImage}`;
    computerChoseElm.innerText = `Computer Chose: ${computerMove}`;
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

function updateResult(){
    winElm.innerText = `Wins:${score.win}`;
    lossElm.innerText = `Losses:${score.loss}`;
    tieElm.innerText = `Ties:${score.tie}`;
}
