//first dice 
var randomNumber = (Math.floor(Math.random()*6))+1;
if (randomNumber === 1){
    document.querySelector(".img1").setAttribute("src" , "images/dice1.png");
}
if (randomNumber === 2){
    document.querySelector(".img1").setAttribute("src" , "images/dice2.png");
}
if (randomNumber === 3){
    document.querySelector(".img1").setAttribute("src" , "images/dice3.png");
}
if (randomNumber === 4){
    document.querySelector(".img1").setAttribute("src" , "images/dice4.png");
}
if (randomNumber === 5){
    document.querySelector(".img1").setAttribute("src" , "images/dice5.png");
}
if (randomNumber === 6){
    document.querySelector(".img1").setAttribute("src" , "images/dice6.png");
}
/////////////////////////////////////////////////////////////////////////////////
//second dice 
var randomNumber2 = (Math.floor(Math.random()*6))+1;
if (randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src" , "images/dice1.png");
}
if (randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src" , "images/dice2.png");
}
if (randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src" , "images/dice3.png");
}
if (randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src" , "images/dice4.png");
}
if (randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src" , "images/dice5.png");
}
if (randomNumber2 === 6){
    document.querySelector(".img2").setAttribute("src" , "images/dice6.png");
}
/////////////////////////////////////////////////////////////////////////////////
//Result
if (randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML=("<i class='fab fa-font-awesome-flag fab-7x' style='color:#9c060c;'></i> Player 1 wins");
}

if (randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML=("Player 2 wins <i class='fab fa-font-awesome-flag fab-7x' style='color:#9c060c;'></i>");
}

if (randomNumber === randomNumber2){
    document.querySelector("h1").innerHTML=("Draw !");
}