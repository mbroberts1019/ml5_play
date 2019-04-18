// jshint esversion:6

let mobilenet;
let puffin;


function modelReady(){
  console.log("model is ready");
  mobilenet.predict(puffin, gotResults);

}

function gotResults(err, results){
  if(err){
    console.error(err);
  }else{
    console.log(results);
    let label = results[0].className;
    let probability = results[0].probability;
    fill (0);
    textSize(25);
    text(label, 10, height -75);
    createP(label).parent('label');
    createP(probability).parent('probability');
  }

}

function imageReady(){
  image(puffin, 0, 0, width, height);
}

function setup(){
  createCanvas(640, 480);
  background(0);
  puffin = createImg("imageClass/images/puffin.jpeg", imageReady);
  puffin.hide();
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
