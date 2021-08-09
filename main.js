status="true"; 
status2="true";
song="";
song2="";

function preload() {
song=loadSound("music.mp3"); 
song2=loadSound("music2.mp3"); 
}
function setup () {
   Canvas=createCanvas(400,400);
   Canvas.center();
   
   video=createCapture(VIDEO);
   video.hide();

   posenet=ml5.poseNet(video,superb);
   posenet.on('pose',faces);
   }
   
function draw () {
    image(video,0,0,400,400);
  
  if (score>0.2) {
     fill("red");
    stroke("origano");
    circle(leftx,lefty,30);
leftwristx=Number(lefty);
removedecimal=floor(leftwristx);
change=removedecimal/500;
 if (status2=="false") {
        song2.play();
        status2="true";
        song.stop();
    } else {
      song.stop(); 
      song2.play() ;
    }  
}
 if (score2>0.2) {
    fill("red");
   stroke("origano");
   circle(rightx,righty,30);
rightwristx=Number(righty);
removedecimal=floor(rightwristx);
change=removedecimal/500;

if (status2=="true") {
    song.play();
    status2="false";
    song2.stop();
} else {
  song2.stop(); 
  song.play() ;
}  

}
document.getElementById("superchange").innerHTML="change="+change;
}
  
function play() {
    if (status=="true") {
        song.play();
        status="false";
    } else {
      song.stop();  
    }
song.setVolume(1);
    song.rate(1);
}
   function superb() {
    console.log("modelloadeed");
}
function faces(results) {
    if (results.length>0) {
      leftx=results[0].pose.leftWrist.x;
      righty=results[0].pose.rightWrist.y;
      lefty=results[0].pose.leftWrist.y;
      rightx=results[0].pose.rightWrist.x;
      console.log("leftx"+leftx);
      console.log("lefty"+lefty);
      console.log("rightx"+rightx);
      console.log("righty"+righty);
      console.log(results);
      score=results[0].pose.keypoints[9].score;

    }
}

