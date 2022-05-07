let numberOfDrumButtons = document.querySelectorAll("button").length;
console.log(numberOfDrumButtons);

for(let i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); 
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event){
    try {
        makeSound(event.key);
        buttonAnimation(event.key);
        
    } catch (excaption) {
       alert("Please enter valid key"); 
    }
       
    });

function makeSound(key)
{
    switch (key) {
        case 'w':
            document.querySelector('.wAudio').play();
            break;
        case 'a':
            document.querySelector('.aAudio').play();
            break;
        case 's':
            document.querySelector('.sAudio').play();
            break;
        case 'd':
            document.querySelector('.dAudio').play();
            break;
        case 'j':
            document.querySelector('.jAudio').play();
            break;
        case 'k':
            document.querySelector('.kAudio').play();
            break;
        case 'l':
            document.querySelector('.lAudio').play();
            break;
    
        default:console.log(key);
            break;  
}
}

function buttonAnimation(currentKey)
{  
document.querySelector("."+currentKey).classList.add("pressed");
setTimeout(() => document.querySelector("."+currentKey).classList.remove("pressed"), 500);



}

