function playGame(playerInput){
    clearMessages();
    function getMoveName(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        } else{
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }

    function displayResults(argComputerMove, argPlayerMove){
        console.log('moves:', argComputerMove, argPlayerMove);
        if (argPlayerMove == 'nieznany ruch'){
            printMessage('Gra niemożliwa, Twój ruch jest nieznany.');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Ja wygrywam!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Ja wygrywam!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Ja wygrywam!');
        } else if (argComputerMove == argPlayerMove){
            printMessage('Jest remis.');
        } else{
            printMessage('Ty wygrywasz!');
        }  
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nożyce';
}
*/
    printMessage('Mój ruch to: ' + computerMove);

  //  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput== 2){
    playerMove = 'papier';
} else if (playerInput == 3){
    playerMove = 'nożyce';
}
*/
    printMessage('Twój ruch to: ' + playerMove);
    displayResults(computerMove, playerMove);

/*
if (playerMove == 'nieznany ruch'){
    printMessage('Gra niemożliwa, Twój ruch jest nieznany.');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Ja wygrywam!');
} else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ja wygrywam!');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ja wygrywam!');
} else if (computerMove == playerMove){
    printMessage('Jest remis.');
} else{
    printMessage('Ty wygrywasz!');
} 
*/
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1')
})
document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2')
})
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3')
})

