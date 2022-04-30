var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event) {
    console.log(event);
 var content=event.results[0][0].transcript;
 document.getElementById("textbox").innerHTML=content; 
 speak();  
}
var cam=document.getElementById("camera");
function speak() {
    var synth=window.speechSynthesis;
var speak_data=document.getElementById("textbox").innerHTML;
var utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach(cam);
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
png_quality:90
});