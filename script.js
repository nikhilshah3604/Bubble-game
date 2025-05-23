var timer = 60; 
var score = 0; 
var hitrn = 0;
function makeBubble()
{
    var clutter=" ";
    for(var i=1; i<=192; i++)
    {
        var ans=Math.floor(Math.random()*10);
     clutter += `<div class="bubble">${ans}</div>`;
    }
    document.querySelector(".bottom").innerHTML=clutter;
}

function timerRun()
{
    function time()
    {
        var t= setInterval(function(){
            if(timer>0)
            {
                timer--;
                document.getElementById("distime").textContent=timer;

            }
            else{
                clearInterval();
                document.querySelector(".bottom").innerHTML="";
                document.querySelector(".bottom").innerHTML=`<h1>Game Over😢<br>
                Score = ${score}</h1>`;
            }
        },1000)
    }
    time();
}

function getNewhit()
{
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}
function increase()
{
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}
function hitBubble()
{
    document.querySelector(".bottom").addEventListener("click",function(value) {
       var hitvalue =  Number(value.target.textContent);
       if(hitvalue === hitrn)
       {
            increase();
            makeBubble();
            getNewhit();
       }
       else{
             document.querySelector(".bottom").innerHTML="";
            document.querySelector(".bottom").innerHTML=`<h1>Game Over😢</h1>`;
       }
    })
}

timerRun();
makeBubble();
getNewhit();
hitBubble();
