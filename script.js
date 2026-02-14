
var message =

"My Paapu, Kanda, Darling, My Wife ❤️\n\n" +

"You are my happiness, my peace, my forever.\n\n" +

"Will you be my Valentine and stay with me forever?";

var i = 0;

var speed = 50;

function typeWriter(){

if(i < message.length){

document.getElementById("text").innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter, speed);

}

}

typeWriter();

document.getElementById("noBtn").onmouseover=function(){

this.style.position="absolute";

this.style.top=Math.random()*500+"px";

this.style.left=Math.random()*500+"px";

}

function yesClick(){

document.body.innerHTML =

`

<h1 style="color:red;text-align:center">

I LOVE YOU KAVYA ❤️<br><br>

Will you stay with me forever?<br><br>

💍

</h1>

<img src="photo1.jpg">

<img src="photo2.jpg">

<img src="photo3.jpg">

`;

}
