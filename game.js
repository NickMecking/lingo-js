// Pak een willekeurig getal tussen 0 en 479
var random = Math.floor( Math.random() * 479);
// kies het woord op die positie in de words array
var answer = words[random];
var firstLetter = document.getElementById('letter_0_0');
// Hak het woord op in losse letters door /split('')
// uit te voeren op het answer
var answerArray = answer.split('');
// Zet het antwoord in de console
console.log(answer);

// Zet de checkBtn in een variabele
var checkBtn = document.getElementById('check')
// Koppel de check functie aan de knop
checkBtn.setAttribute("onclick", "check();");

firstLetter.value = answerArray[0];
var attempt = 1
// Maak de check functie aan
function check(){
  // Zorg dat elk inputveld wordt gecontroleerd met eenzelfde
  // positie in de answerArray
  for (var b = 0; b <=4; b++) {
    for (var i = 0; i <=4; i++){
    // Zet het eerste input element in een variabele
    var input = document.getElementById("letter_" + b + "_" + i);

    // Zet de waarde hiervan in het console
    console.log(input.value);

    // Als de waarde in het eerste tekstblok gelijk is aan
    // het eerste karakter in de array, dan moet de achtergrond
    // kleur van het tekstvlak rood worden
      if(input.value == answerArray[i]){
        input.style.backgroundColor = "red";
      }else
      {
          for (var j = 0; j < 4; j++) {
            if(input.value === answerArray[j]){
              input.style.backgroundColor = "yellow";
            }
          }
      }
    }
  }
}
