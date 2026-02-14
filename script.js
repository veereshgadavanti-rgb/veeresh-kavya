
var message=

"My Paapu, Kanda, Darling, My Wife ❤️\n\n"+

"You are my heart, my soul, my forever.\n\n"+

"You and me... this love is forever.";

var i=0;

function typing(){

if(i<message.length){

document.getElementById("text").innerHTML+=message.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();


// NO escape

document.getElementById("noBtn").onmouseover=function(){

this.style.position="absolute";

this.style.top=Math.random()*500+"px";

this.style.left=Math.random()*500+"px";

}


// START LOVE

function startLove(){

document.getElementById("music").play();

showFinal();

effects();

}


// FINAL MESSAGE (POSITIVE)

function showFinal(){

document.body.innerHTML=

`

<h1 style="color:red;text-align:center;font-size:40px">

Veeresh ❤️ Kavya<br><br>

We will never stop loving each other.<br><br>

Our love is forever.<br><br>

💍❤️🌹

</h1>

<img src="photo1.jpg">

<img src="photo2.jpg">

<img src="photo3.jpg">

`;

}


// EFFECTS

function effects(){

setInterval(function(){

var e=document.createElement("div");

e.innerHTML="❤️";

e.className="effect";

e.style.left=Math.random()*100+"%";

document.body.appendChild(e);

},300);

}
