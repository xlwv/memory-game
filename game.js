var colours = ["red", "blue", "green", "yellow"];

var gamepattern = [];
var userpattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
    $("#level-title").text("Level" + level);
    randomnumber();
    started=true;
    }
});
$(".btn").click(function(){
var userchosen=$(this).attr("id");
userpattern.push(userchosen);
animation(userchosen);
playsound(userchosen);
checkanswer(userpattern.length-1);
});
function checkanswer(currentlevel)
{
    if(userpattern[currentlevel]===gamepattern[currentlevel])
    {if (userpattern.length === gamepattern.length){
        setTimeout(function(){randomnumber();},1000);
    }
}
    else
    {
        playsound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          startover();
    
    }
}
function randomnumber()
{
    userpattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var pick=Math.floor(Math.random()*4);
    var gamechosen=colours[pick];
    gamepattern.push(gamechosen);
   // $("#" + gamechosen).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(gamechosen);
    animation(gamechosen);
    
}
function animation(currentcolour)
{
    $("#"+currentcolour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentcolour).removeClass("pressed");
    }, 100);
}
function playsound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function startover()
{
    level=0;
    gamepattern=[];
    
    started=false;
}
