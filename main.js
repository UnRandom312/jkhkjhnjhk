var noseX = 0
var noseY = 0
var dist = 0
var manoIZQ = 0
var manoDERCH = 0

function setup(){
var canvo = createCanvas(400,400)
canvo.position(750,180)
var camera = createCapture(VIDEO)
camera.size(400,400)
posenet = ml5.poseNet(camera,modeloCargado)
posenet.on('pose',gotPoses)
}
function modeloCargado(){
    console.log("modeloCargado")
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        manoIZQ = results[0].pose.leftWrist.x
        manoDERCH = results[0].pose.rightWrist.x
        dist = floor(manoIZQ - manoDERCH)
    }
}
function draw(){
    background('antiquewhite')
    document.getElementById('darbo').innerHTML = dist
    fill('red')
    stroke('black')
    textSize(dist)
    text('brih',100,100)
}