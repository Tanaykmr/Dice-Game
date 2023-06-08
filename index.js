var num = Math.random();
var num1 = 6 * num;
var num2 = Math.ceil(num1);
var randomNumber1 = num2;
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceSource = "images/" + randomDiceImage

var Diceimg1 = document.querySelectorAll("img")[0];

Diceimg1.setAttribute("src" , randomDiceSource);



var Bnum = Math.random();
var Bnum1 = 6 * Bnum;
var Bnum2 = Math.ceil(Bnum1);
var randomNumber2 = Bnum2;
console.log(randomNumber2);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceSource2 = "images/" + randomDiceImage2

var Diceimg2 = document.querySelectorAll("img")[1];

Diceimg2.setAttribute("src" , randomDiceSource2);


var heading = document.querySelectorAll("h1")[0];

if (randomNumber1 > randomNumber2)
{
    heading.innerHTML = "🚩 Player1 wins!";
}
else if (randomNumber1 === randomNumber2)
{
    heading.innerHTML = "🚩It's a TIE!🚩";
}
else
{
    heading.innerHTML = "🚩 Player2 wins!";
}
