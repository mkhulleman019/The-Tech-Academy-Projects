//Animate Logo//
document.getElementById("logo").animate([
    // keyframes
    { transform: 'translateY(-48%)' },
    { transform: 'translateY(0)' }
  ], {
    // timing options
    duration: 1000,
    iterations: 1
  });


//Play sound//
function playSound(){
    var audio = document.getElementById("sound");
    audio.play();
}