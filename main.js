function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(60,50)
    //Created Video Capture
    canvas = createCanvas(550,450);
    canvas.position(750,75);
    //PoseNet Functions \/
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet has been initialized");
}

function draw(){
 background('#cfcfcf');
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    }
    else{
        console.error("Naw hell no");
    }
}