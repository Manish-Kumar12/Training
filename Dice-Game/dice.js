var firstRandomNum = Math.floor(Math.random()*6) + 1  //Generate a random number from 1 to 6

var firstDiceImage = 'images/d' + firstRandomNum + '.png'; //Generate a random number from 1 to 6

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

var secondRandomNum = Math.floor(Math.random()*6) + 1 //Generate a random number from 1 to 6

var secondDiceImage = 'images/d' + secondRandomNum + '.png';  //get images/dice 1 upto dice 6.png

document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);


//logic for winner
if(firstRandomNum > secondRandomNum)
{
    document.querySelector('h1').innerHTML='Player 1 Wins';
}
else if (firstRandomNum < secondRandomNum)
{
    document.querySelector('h1').innerHTML='Player 2 wins';
}
else
{
    document.querySelector('h1').innerHTML="it's Draw !";
}