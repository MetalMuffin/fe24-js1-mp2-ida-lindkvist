const formet = document.querySelector('#formet')
let welcome = document.querySelector('#welcome')

formet.addEventListener('submit', event =>{
    event.preventDefault();

    const name = document.querySelector('h2');
    let textInput = document.querySelector('#textInput').value;

    name.innerText = `Välkommen till spelet ${textInput}`;
    welcome.innerText = ' '
    
})


const hitDice = document.querySelector('#dice')
const diceResult = document.querySelector('#diceResult')
const turnResult = document.querySelector('#turnResult')
const numberofroundsEl = document.querySelector('#numberofroundsEl')
let numberofRounds = 0;
const freeze = document.querySelector('#freeze')
const resetBtn = document.querySelector('#resetBtn')


hitDice.addEventListener('click', pigGame);

let turnResultnr = 0;
let currentTotal = 0;

function pigGame(event){
    event.preventDefault();
    
    let randomNumber = Math.floor(Math.random()*6) +1;
    
    diceResult.innerText = `Du slog en: ${randomNumber}`;
    
    
    if(randomNumber !==1){
        turnResultnr += randomNumber;
        turnResult.innerText = `Rundans poäng: ${turnResultnr}`;
    }

    else {
        turnResult.innerText = 'Du slog en etta din tönt - ny omgång';
        resetRound();
    }
    
    if (currentTotal >= 100){
       const h2 = document.createElement('h2');
       document.body.appendChild(h2); 
       h2.innerText = `Grattis! Du vann på ${numberofRounds} omgångar`;
    }
    
}

freeze.addEventListener('click', event =>{
    currentTotal += turnResultnr
    totalPoint.innerText = `Totalpoäng: ${currentTotal}`;
    resetRound();
})

function resetRound(){
    turnResultnr = 0;
    numberofRounds++;
    numberofroundsEl.innerText = `Du har slagit ${numberofRounds} omgångar`;
}

resetBtn.addEventListener('click', event =>{
    reset();
})

function reset(){
    turnResult.innerText = 'Rundans poäng:';
    diceResult.innerText = 'Du har inte slagit tärningen än';
    turnResultnr = 0;
    numberofRounds = 0;
    numberofroundsEl.innerText = 'Du har inte sparat dina poäng än'
    totalPoint.innerText = 'Totalpoäng:';
    currentTotal = 0;
}