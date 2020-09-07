/*let buffer = new Tone.Buffer("ftp://hipermedial2020%2540surwww.com@ftp.surwww.com/daza_juanmanuel/experimentocongrid/sounds/pad/pad1.mp3", function(){
	//the buffer is now available.
    let buff = buffer.get();
});*/
//let player = new Tone.Player(buffer.load()).toMaster();

// KEYBOARD

const synth = new Tone.Synth();

synth.toMaster();

// ARPEGGIATOR

var pattern = new Tone.Pattern(function(time, note){
	synth.triggerAttackRelease(note, 0.25);
}, ["C4", "D4", "E4", "G4", "A4"]);

//


let key1 = document.getElementById("key1");
let key2 = document.getElementById("key2");
let key3 = document.getElementById("key3");
let key4 = document.getElementById("key4");
let key5 = document.getElementById("key5");
let key6 = document.getElementById("key6");
let key7 = document.getElementById("key7");
let key8 = document.getElementById("key8");

key1.onmousedown = () => {
    key1.style.backgroundColor = "red";
    //synth.triggerAttack('C4','8n');
    pattern.start(0);
}
key1.onmouseup = () => {
    key1.style.backgroundColor = "blueviolet";
    //synth.triggerRelease(0.25);
}
key2.onmousedown = () => {
    key2.style.backgroundColor = "red";
    synth.triggerAttack('D4','8n');
}
key2.onmouseup = () => {
    key2.style.backgroundColor = "blueviolet";
    synth.triggerRelease();
}
key3.onmousedown = () => {
    key3.style.backgroundColor = "red";
    synth.triggerAttack('E4','8n');
}
key3.onmouseup = () => {
    key3.style.backgroundColor = "blueviolet";
    synth.triggerRelease();
}
key4.onmousedown = () => {
    key4.style.backgroundColor = "red";
    synth.triggerAttack('F4','8n');
}
key4.onmouseup = () => {
    key4.style.backgroundColor = "blueviolet";
    synth.triggerRelease();
}
key5.onmousedown = () => {
    key5.style.backgroundColor = "red";
    synth.triggerAttack('G4','8n');
}
key5.onmouseup = () => {
    key5.style.backgroundColor = "blueviolet";
    synth.triggerRelease();
}
key6.onmousedown = () => {
    key6.style.backgroundColor = "red";
    synth.triggerAttack('A4','8n');
}
key6.onmouseup = () => {
    key6.style.backgroundColor = "blueviolet";
    synth.triggerRelease();
}
key7.onmousedown = () => {
    key7.style.backgroundColor = "red";
    synth.triggerAttack('B4','8n');
}
key7.onmouseup = () => {
    key7.style.backgroundColor = "blueviolet";
    synth.triggerRelease();
}
key8.onmousedown = () => {
    key8.style.backgroundColor = "red";
    synth.triggerAttack('C5','8n');
    
}
key8.onmouseup = () => {
    key8.style.backgroundColor = "blueviolet";
    synth.triggerRelease();
}



