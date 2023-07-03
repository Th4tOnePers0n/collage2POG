function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    hight:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");