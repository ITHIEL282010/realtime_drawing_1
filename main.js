function setup()
{
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(600, 600);
    canvas.position(600,85);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}

function draw()
{
    background('#000000');
}