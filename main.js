

functi on startClassification(){
document.getElementById("1").innerHTML="<h5 id='1'>detected dog - 0"
document.getElementById("2").innerHTML="<h5 id='2'>detected cat - 0"
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("model.json",modelReady);
}

functi on modelReady(){
    classifier.classify(gotResult);
}
funct ion gotResult(error,results){
console.log("got result");
if(error){
    console.log(error);
}
else{
  console.log(results);
  random_number_r=Math.floor(Math.random()*255)+1;
  random_number_g=Math.floor(Math.random()*255)+1;
  random_number_b=Math.floor(Math.random()*255)+1;

  document.getElementById("result_label").innerHTML="I can hear = "+results[0].label;
  
  document.getElementById("result_confidence").innerHTML=" Accuracy = "+(results[0].confidence*100).toFixed(2)+"%";
  document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
  document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img1=document.getElementById("alien1");
img2=document.getElementById("alien2");
img3=document.getElementById("alien3");
img4=document.getElementById("alien4");

if(results[0].label=="Background Noise"){
img1.src="aliens-01.gif";
img2.src="aliens-02.png";

}
else if(results[0].label=="clap"){
    img1.src="aliens-01.png";
    img2.src="aliens-02.gif";

    }
    else if(results[0].label=="yes"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
       
        }
      






}
}