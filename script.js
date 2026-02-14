var no=document.getElementById("no");

no.onmouseover=function(){
no.style.left=Math.random()*window.innerWidth+"px";
no.style.top=Math.random()*window.innerHeight+"px";
}

document.getElementById("yes").onclick=function(){

document.getElementById("question").style.display="none";
document.getElementById("final").style.display="block";

document.getElementById("music").play();

type();

};

var text="Kavya ❤️ You are my forever. Love you always. 💖";

var i=0;

function type(){

if(i<text.length){

document.getElementById("message").innerHTML+=text.charAt(i);

i++;
setTimeout(type,40);

}

}
