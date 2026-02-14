

var message =

"My Paapu, Kanda, Darling, My Wife ❤️\n\n"+

"You are my life, my happiness, my forever.\n\n"+

"Our love is the most beautiful thing in my life.\n\n"+

"Click YES to enter our forever world ❤️";


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


document.getElementById("music").play();


finalPage();


hearts();


}



// FINAL PAGE


function finalPage(){


document.body.innerHTML =


`


<h1 style="color:red;text-align:center;font-weight:bold;">


Veeresh Loves Kavuuuuu🌹❤️


<br><br>


We will never stop loving each other.


<br><br>


Our love is forever and infinite.


<br><br>


🌹❤️💍


</h1>


<img src="photo1.jpg">


<img src="photo2.jpg">


<img src="photo3.jpg">


`;


}



// HEART EFFECT


function hearts(){


setInterval(function(){


var heart=document.createElement("div");


heart.innerHTML="❤️";


heart.className="heart";


heart.style.left=Math.random()*100+"%";


document.body.appendChild(heart);


},300);


}
