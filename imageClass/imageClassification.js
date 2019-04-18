// jshint esversion:6

let mobilenet;
let animal = document.getElementById("imageToClass");

$(".flex-image").on("click",function(){
  document.getElementById("imageToClass").src = this.src ;
  modelReady();
});

mobilenet = ml5.imageClassifier("MobileNet", modelReady);

function modelReady(){
  console.log("model is ready");
  mobilenet.predict(animal, gotResults);

}

function gotResults(err, results){
  if(err){
    console.error(err);
  }else{
    console.log(results);
    let label = results[0].className;
    let probability = results[0].probability;
    $("#probabilityData").html( probability );
    $("#labelData").html( label );
  }

}
