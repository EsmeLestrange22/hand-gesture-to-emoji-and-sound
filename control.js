//https://teachablemachine.withgoogle.com/models/l4juoJMkp/
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera= document.getElementById("cam");
Webcam.attach(camera);

function capture() {
    Webcam.snap(
function(data_uri) {
    document.getElementById("pic").innerHTML= "<img id= 'picture' src='"+data_uri+"'>" 
}


    )
};
 //model loading starts 
 classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/l4juoJMkp/model.json", model_ready);
 function model_ready() {
     console.log("Done");
 }