
function startClassification(){
document.getElementById("1").innerHTML="<h5>detected dog - 0</h5>";
document.getElementById("2").innerHTML="<h5>detected cat - 0</h5>";
document.getElementById("3").innerHTML="<h5>detected background noise - 0</h5>";
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0EEsYukpr/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

counter_BN=0;
counter_cat=0;
counter_dog=0;

function gotResult(error,results){
console.log("got result");
if(error){
    console.log(error);
}
else{
  console.log(results);
  random_number_r=Math.floor(Math.random()*255)+1;
  random_number_g=Math.floor(Math.random()*255)+1;
  random_number_b=Math.floor(Math.random()*255)+1;

  document.getElementById("result_confidence").innerHTML="I can hear = "+results[0].label;
  
img1=document.getElementById("img");

if(results[0].label=="Background Noise"){
img1.src="download.png";
document.getElementById("results_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
  document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
  counter_BN=counter_BN+1;
  document.getElementById("3").innerHTML="<h5>detected background noise - "+counter_BN+"</h5>";
}
else if(results[0].label=="DOG"){
    img1.src="download (1).png";
    document.getElementById("results_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    counter_dog=counter_dog+1;
    document.getElementById("1").innerHTML="<h5>detected dog - "+counter_dog+"</h5>" ;

    }
    else {
        img1.src="download (2).png";
        document.getElementById("results_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        counter_cat=counter_cat + 1 ;
  document.getElementById("2").innerHTML="<h5>detected cat - "+counter_cat+"</h5>";
       
        } 
      
      






}
}
