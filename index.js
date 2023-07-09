var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    btnAnimation(buttonInnerHTML);

  });
}

//keypress eventListener

document.addEventListener("keypress",function (event) {
  makeSound(event.key);
  btnAnimation(event.key);
});

function makeSound (key) {

  switch (key) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
  
    case 'd':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;

    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case 'k':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

      case 'l':
        var audio = new Audio('sounds/level6c.mp3');
        audio.play();
        break;        
    default:
      break;
  }
  
}

function btnAnimation(currentKey) {
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function(){activeBtn.classList.remove("pressed");},100);
}