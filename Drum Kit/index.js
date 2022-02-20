// Function to Play Sound
function play(elem) {
  switch (elem) {
      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
      break;
      case "a":
        var tom1 = new Audio('sounds/tom-2.mp3');
        tom1.play();
      break;
      case "s":
        var tom1 = new Audio('sounds/tom-3.mp3');
        tom1.play();
      break;
      case "d":
        var tom1 = new Audio('sounds/tom-4.mp3');
        tom1.play();
      break;
      case "j":
        var tom1 = new Audio('sounds/snare.mp3');
        tom1.play();
      break;
      case "k":
        var tom1 = new Audio('sounds/crash.mp3');
        tom1.play();
      break;
      case "l":
        var tom1 = new Audio('sounds/kick-bass.mp3');
        tom1.play();
      break;
      default: console.log();
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key)
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  // Detecting Button Click
  document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
    var keyClicked = this.innerHTML;
    play(keyClicked);
    buttonAnimation(keyClicked);
  });
}
  // Detecting KeyBoard Press
  document.addEventListener("keydown", function (event) {
    play(event.key);
    buttonAnimation(event.key);
});
