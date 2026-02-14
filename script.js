
var text =

"My Paapu, Kanda, Darling, My Wife ❤️\n\n" +

"You are my life, my happiness, my forever.\n\n" +

"Will you be mine forever?";

var i=0;

function typing(){

if(i<text.length){

document.getElementById("text").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();


// NO button escape

document.getElementById("noBtn").onmouseover=function(){

this.style.position="absolute";

this.style.top=Math.random()*500+"px";

this.style.left=Math.random()*500+"px";

}


// YES click

function yesClick(){

document.getElementById("music").play();

showFinal();

startRoses();

}


// FINAL screen

function showFinal(){

document.body.innerHTML=

`

<h1 style="color:red;text-align:center">

I LOVE YOU KAVYA ❤️<br><br>

Will you stay with me forever? 💍

</h1>

<img src="photo1.jpg">

<img src="photo2.jpg">

<img src="photo3.jpg">

`;

}


// ROSES

function startRoses(){

setInterval(function(){

var rose=document.createElement("div");

rose.innerHTML="🌹";

rose.className="rose";

rose.style.left=Math.random()*100+"%";

document.body.appendChild(rose);

},300);

}
