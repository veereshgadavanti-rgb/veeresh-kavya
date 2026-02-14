

var message =

"My Paapu, Kanda, Darling, My Wife ❤️\n\n"+

"You are my life, my happiness, my forever.\n\n"+

"Our love is forever ❤️";


var i=0;


function typing(){

if(i<message.length){

document.getElementById("text").innerHTML += message.charAt(i);

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


function startLove(){


var music=document.getElementById("music");

music.play().catch(()=>{});


showFinal();

startHearts();

}




// FINAL PAGE


function showFinal(){

document.body.innerHTML=`

<h1 style="color:red;text-align:center">

Veeresh ❤️ Kavya

<br><br>

We will never stop loving each other.

<br><br>

Our love is forever ❤️

</h1>

<img src="photo1.jpg">

<img src="photo2.jpg">

<img src="photo3.jpg">

`;

}




// HEART FALL FROM SKY


function startHearts(){


setInterval(function(){


var heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*3+3)+"s";

document.body.appendChild(heart);


},300);


}
