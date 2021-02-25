
var drumButton = document.querySelectorAll(".drum");
for (var i=0; i<drumButton.length; i++)
{
    drumButton[i].addEventListener("click",function()
    {
        var buttonInnerHtml = this.innerHtml
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch(key)
    {
        case 'w':
            var audio= new Audio("sounds/sound1.mp3");
            audio.play();
            break;

        case 'a':
            var audio= new Audio("sounds/sound2.mp3");
            audio.play();
            break;

        case 's':
            var audio= new Audio("sounds/sound1.mp3");
            audio.play();
            break;

        case 'd':
            var audio= new Audio("sounds/sound2.mp3");
            audio.play();
            break;

        case 'j':
            var audio= new Audio("sounds/sound1.mp3");
            audio.play();
            break;

        case 'k':
            var audio= new Audio("sounds/sound2.mp3");
            audio.play();
            break;

        case 'l':
            var audio= new Audio("sounds/sound1.mp3");
            audio.play();
            break;
    }
}


function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100);
}