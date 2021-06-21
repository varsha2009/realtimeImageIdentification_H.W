function preload(){
};
function setup(){
    canvas = createCanvas(300,300);
    canvas.position(535,250);
    camera = createCapture(VIDEO);
    camera.hide();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sJSCp3jy9/model.json" , modalLoaded);
}
function draw(){
    image(camera,10,10,280,280);
    classifier.classify(camera , gotResult);
}
function modalLoaded(){
    console.log("modal is loaded")
}
function gotResult(error,results){
    if(error){
        console.log("error : "+error)
    }else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("accuracy_name").innerHTML = (results[0].confidence.toFixed(2))*100+ "%";
    }
}