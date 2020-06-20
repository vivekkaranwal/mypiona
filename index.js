var audio;
  $(".box1").click(()=>{
    audio  = new Audio("New folder (2)/sound1.mp3")
           audio.play();
       
           
    });
    $(".box2").click(()=>{
    audio = new Audio("New folder (2)/sound2.mp3")
    audio.pause();
      audio.play();

});
$(".box3").click(()=>{
 audio = new Audio("New folder (2)/sound3.mp3")
  audio.pause();
  audio.play();

});
$(".box4").click(()=>{
   audio = new Audio("New folder (2)/sound4.mp3")
   audio.pause();
  audio.play();

});
$(".box5").click(()=>{
   audio = new Audio("New folder (2)/sound5.mp3")
   audio.pause();
  audio.play();

});
$(".box6").click(()=>{
   audio = new Audio("New folder (2)/sound6.mp3")
   audio.pause();
  audio.play();

});
$(".box7").click(()=>{
   audio = new Audio("New folder (2)/sound7.mp3");
   audio.pause();
  audio.play();

});
$(".box8").click(()=>{
 audio = new Audio("New folder (2)/sound18.mp3")
 audio.pause();
  audio.play();

});
$(".box9").click(()=>{
 audio = new Audio("New folder (2)/sound9.mp3");
 audio.pause();
  audio.play();

});
$(".box10").click(()=>{
  audio = new Audio("New folder (2)/sound10.mp3");
  audio.pause();
  audio.play();

});
$(".box11").click(()=>{
 audio = new Audio("New folder (2)/sound11.mp3");
 audio.pause();
  audio.play();

});
$(".box12").click(()=>{
 audio = new Audio("New folder (2)/sound12.mp3");
 audio.pause();
  audio.play();

});
$(".box13").click(()=>{
 audio = new Audio("New folder (2)/sound13.mp3")
 audio.pause();
  audio.play();

});
$(".box14").click(()=>{
 audio = new Audio("New folder (2)/sound14.mp3")
 audio.pause();
  audio.play();

});
$(".box15").click(()=>{
  audio = new Audio("New folder (2)/sound15.mp3")
  audio.pause();
  audio.play();

});
$(".box16").click(()=>{
  audio = new Audio("New folder (2)/sound16.mp3")
  audio.pause();
  audio.play();

});
$(".box17").click(()=>{
   audio = new Audio("New folder (2)/sound17.mp3")
   audio.pause();
  audio.play();

});
document.addEventListener("keypress",function(event){
      key =  event.key;
       console.log(key);
       switch (key) {
         case 'a':
           audio = new Audio("New folder (2)/sound1.mp3")
           audio.pause();
          audio.play();
      
           break;
           case 's':
           audio = new Audio("New folder (2)/sound2.mp3")
           audio.pause();
            audio.play();
          break;
          case 'd':
         audio = new Audio("New folder (2)/sound3.mp3")
         audio.pause();
            audio.play();
          break;
          case 'f':
              audio = new Audio("New folder (2)/sound4.mp3")
              audio.pause();
            audio.play();
          break;     
          case 'g':
              audio = new Audio("New folder (2)/sound5.mp3")
              audio.pause();
            audio.play();
          break;
          case 'h':
              audio = new Audio("New folder (2)/sound6.mp3")
              audio.pause();
            audio.play();
          break;
          case 'j':
              audio = new Audio("New folder (2)/sound7.mp3")
              audio.pause();
            audio.play();
          break;
          case 'k':
              audio = new Audio("New folder (2)/sound18.mp3")
              audio.pause();
            audio.play();
          break;
          case 'l':
              audio = new Audio("New folder (2)/sound9.mp3")
              audio.pause();
            audio.play();
          break;
          case 'w':
              audio = new Audio("New folder (2)/sound10.mp3")
              audio.pause();
            audio.play();
          break;
          case 'e':
              audio = new Audio("New folder (2)/sound11.mp3")
              audio.pause();
            audio.play();
          break;
          case 'r':
              audio = new Audio("New folder (2)/sound12.mp3")
              audio.pause();
            audio.play();
          break;
          case 't':
              audio = new Audio("New folder (2)/sound13.mp3")
              audio.pause();
            audio.play();
          break;
          case 'y':
              audio = new Audio("New folder (2)/sound14.mp3")
              audio.pause();
            audio.play();
          break;
          case 'u':
              audio = new Audio("New folder (2)/sound15.mp3")
              audio.pause();
            audio.play();
          break;
          case 'i':
              audio = new Audio("New folder (2)/sound16.mp3")
              audio.pause();
            audio.play();
          break;
          case 'o':
              audio = new Audio("New folder (2)/sound17.mp3")
              audio.pause();
            audio.play();
            break;
         default:
           break;
       }

});