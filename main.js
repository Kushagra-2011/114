noseX=0;
noseY=0;
function preload(){
    clown_nose= loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function preload(){
    createCanvas(300,300);
    canvas.center();
    video= createcapture(VIDEO)
    video.size (300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,300,300)
    image(clown_nose,noseX,noseX,30,30)
}