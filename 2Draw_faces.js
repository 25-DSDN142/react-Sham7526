// ----=  Faces  =----
/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }

    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */
    // Here are some variables you may like to use. 
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;
    /*
    Start drawing on the face here
    */

function drawPointMesh(f) {
  drawPoints(face.leftEye);
  drawPoints(face.leftEyebrow);
  drawPoints(face.lips);
  drawPoints(face.rightEye);
  drawPoints(face.rightEyebrow);
}
function LeftEyeSkull() {
    stroke(255, 255, 255)
    strokeWeight(10)
    fill(255, 255, 255);
    line(leftEyeCenterX -25, leftEyeCenterY -25, leftEyeCenterX +25, leftEyeCenterY +25);
    line(leftEyeCenterX +25, leftEyeCenterY -25, leftEyeCenterX -25, leftEyeCenterY +25);
    ellipse(leftEyeCenterX -23, leftEyeCenterY -27, 2, 2);
    ellipse(leftEyeCenterX -27, leftEyeCenterY -23, 2, 2);
    ellipse(leftEyeCenterX +23, leftEyeCenterY -27, 2, 2);
    ellipse(leftEyeCenterX +27, leftEyeCenterY -23, 2, 2);
    ellipse(leftEyeCenterX -23, leftEyeCenterY +27, 2, 2);
    ellipse(leftEyeCenterX -27, leftEyeCenterY +23, 2, 2);
    ellipse(leftEyeCenterX +23, leftEyeCenterY +27, 2, 2);
    ellipse(leftEyeCenterX +27, leftEyeCenterY +23, 2, 2);

    noStroke()
    fill(255, 255, 255);
    ellipse(leftEyeCenterX, leftEyeCenterY, 50, 50);
    fill(0)
    ellipse(leftEyeCenterX -11, leftEyeCenterY +4, 15, 15);
    ellipse(leftEyeCenterX +11, leftEyeCenterY +4, 15, 15);
    
    strokeWeight(3)
    stroke(0)
    noFill()
    line(leftEyeCenterX -3, leftEyeCenterY +16, leftEyeCenterX, leftEyeCenterY +13)
    line(leftEyeCenterX +3, leftEyeCenterY +16, leftEyeCenterX, leftEyeCenterY +13)

    stroke(255, 255, 255)
    strokeWeight(6)
    fill(225, 225, 255);
    line(leftEyeCenterX -8, leftEyeCenterY +21, leftEyeCenterX -8, leftEyeCenterY +25)
    line(leftEyeCenterX -2.8, leftEyeCenterY +21, leftEyeCenterX -2.8, leftEyeCenterY +25)
    line(leftEyeCenterX +2.8, leftEyeCenterY +21, leftEyeCenterX +2.8, leftEyeCenterY +25)
    line(leftEyeCenterX +7, leftEyeCenterY +21, leftEyeCenterX +7, leftEyeCenterY +25)
}
function RightEyeSkull() {
    stroke(255, 255, 255)
    strokeWeight(10)
    fill(255, 255, 255);
    line(rightEyeCenterX -25, rightEyeCenterY -25, rightEyeCenterX +25, rightEyeCenterY +25);
    line(rightEyeCenterX +25, rightEyeCenterY -25, rightEyeCenterX -25, rightEyeCenterY +25);
    ellipse(rightEyeCenterX -23, rightEyeCenterY -27, 2, 2);
    ellipse(rightEyeCenterX -27, rightEyeCenterY -23, 2, 2);
    ellipse(rightEyeCenterX +23, rightEyeCenterY -27, 2, 2);
    ellipse(rightEyeCenterX +27, rightEyeCenterY -23, 2, 2);
    ellipse(rightEyeCenterX -23, rightEyeCenterY +27, 2, 2);
    ellipse(rightEyeCenterX -27, rightEyeCenterY +23, 2, 2);
    ellipse(rightEyeCenterX +23, rightEyeCenterY +27, 2, 2);
    ellipse(rightEyeCenterX +27, rightEyeCenterY +23, 2, 2);

    noStroke()
    fill(255, 255, 255);
    ellipse(rightEyeCenterX, rightEyeCenterY, 50, 50);
    fill(0)
    ellipse(rightEyeCenterX -11, rightEyeCenterY +4, 15, 15);
    ellipse(rightEyeCenterX +11, rightEyeCenterY +4, 15, 15);
    
    strokeWeight(3)
    stroke(0)
    noFill()
    line(rightEyeCenterX -3, rightEyeCenterY +16, rightEyeCenterX, rightEyeCenterY +13)
    line(rightEyeCenterX +3, rightEyeCenterY +16, rightEyeCenterX, rightEyeCenterY +13)

    stroke(255, 255, 255)
    strokeWeight(6)
    fill(225, 225, 255);
    line(rightEyeCenterX -8, rightEyeCenterY +21, rightEyeCenterX -8, rightEyeCenterY +25)
    line(rightEyeCenterX -2.8, rightEyeCenterY +21, rightEyeCenterX -2.8, rightEyeCenterY +25)
    line(rightEyeCenterX +2.8, rightEyeCenterY +21, rightEyeCenterX +2.8, rightEyeCenterY +25)
    line(rightEyeCenterX +7, rightEyeCenterY +21, rightEyeCenterX +7, rightEyeCenterY +25)
}

  // drawPointMesh();

  LeftEyeSkull();
  RightEyeSkull();
    // drawX(rightEyeCenterX,rightEyeCenterY);
    // drawX(leftEyeCenterX,leftEyeCenterY);


    // drawX(noseTipX,noseTipY); 

    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);


    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}

function drawX(X, Y) {
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}