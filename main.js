var userName = '';
var userQuestion = '';
var randomNum = Math.floor(Math.random() * 8);
var eightBall;


if (userName === ''){
    console.log('Hello!');
} else { console.log (`Hello, ${userName}!`);
}

console.log(`${userName} asked ${userQuestion}`);


if (randomNum == 0){
    eightBall = 'It is certain'

} else if (randomNum === 1){
    eightBall = 'It is decidedly so'

}else if (randomNum === 2){
    eightBall = 'Reply hazy try again'
    
}else if (randomNum === 3){
    eightBall = 'Cannot predict now'
    
}else if (randomNum === 4){
    eightBall = 'Do not count on it'
    
}else if (randomNum === 5){
    eightBall = 'My sources say no'
    
}else if (randomNum === 6){
    eightBall = 'Outlook not so good'
    
}else { (randomNum === 7)
    eightBall = 'Signs point to yes'
}
console.log(eightBall);
