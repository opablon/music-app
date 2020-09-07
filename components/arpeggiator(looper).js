

// UPDATE: there is a problem in chrome with starting audio context
//  before a user gesture. This fixes it.
var started = false;
document.documentElement.addEventListener('mousedown', () => {
  if (started) return;
  started = true;

  // const $prelabels = document.querySelectorAll('label');

  const $inputs = document.querySelectorAll('input'),
        chords = [
          'A0 C1 E1', 'F0 A0 C1', 'G0 B0 D1',
          'D0 F0 A0', 'E0 G0 B0', 'B0 D3 F2',
          'C1 F0 A2', 'A1 F3 C0'
        ].map(formatChords);
  //console.log(chords);
  var chordIdx = 0,
      step = 0;


  const synth = new Tone.Synth();
  const gain = new Tone.Gain(0.7);
  synth.oscillator.type = 'sine';
  gain.toMaster();
  synth.connect(gain);

  // const $labels = Array.from($prelabels);

  Array.from($inputs).forEach($input => {
    $input.addEventListener('change', () => {
      if ($input.checked) handleChord($input.value);
      console.log($input.value);
    })
  });

  // Esta función, lo que hace es tomar el valor de cada elemento $input, 
  // restarle 1 y convertirlo de string a número INT para, con estos dos 
  // procesos, sacar un valor del 0 al .. que permita iterar por los diferentes
  // acordes definidos en el array.
  // Pienso que quizás igual es medio al pedo esto que hizo este chabón,
  // porque este valor que trae la variable $input, la está tomando del atributo
  // value de los elementos input que están en el HTML.

  function handleChord(valueString) {
    chordIdx = parseInt(valueString);
    //
   // if ($labels[chordIdx].style.backgroundColor == "red") {
   //     $labels[chordIdx].style.backgroundColor = "green";
   // }
   // $labels[chordIdx].style.backgroundColor = "red"; 
    console.log(chordIdx);
  }

 
  Tone.Transport.scheduleRepeat(onRepeat, '16n');
  Tone.Transport.start();
  Tone.Transport.bpm.value = 90;

  function onRepeat(time) {
    let chord = chords[chordIdx],
        note = chord[step % chord.length];
    synth.triggerAttackRelease(note, '16n', time);
    step++;
  }

  // DOWN THE LINE THIS WILL MAKE THINGS EASIER
  function formatChords(chordString) {
    let chord = chordString.split(' ');
    let arr = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < chord.length; j++) {
        let noteOct = chord[j].split(''),
            note = noteOct[0];
        let oct = (noteOct[1] === '0') ? i + 4 : i + 5;
        note += oct;
        arr.push(note);
      }
    }
    return arr;
  }
  
  

});