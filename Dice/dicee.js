var randomNumber1 = Math.floor(Math.random() *6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var randomImageSource1 = "images/" + "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource1);

if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "Player 1 WON!";

}else if (randomNumber1 < randomNumber2) {

    document.querySelector("h1").innerHTML = "Player 2 WON!";

}else {

    document.querySelector("h1").innerHTML = "DRAW!";
}