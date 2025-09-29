// ----=  HANDS  =----
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {

  // hands part
  // USING THE GESTURE DETECTORS (check their values in the debug menu)
  // detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"

  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    if (showKeypoints) {
      drawPoints(hand)
      drawConnections(hand)
    }
    // console.log(hand);
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;

    let pinkyFingerTipX = hand.pinky_finger_tip.x;
    let pinkyFingerTipY = hand.pinky_finger_tip.y;

    let thumbTipX = hand.thumb_tip.x;
    let thumbTipY = hand.thumb_tip.y;

    let ringFingerTipX = hand.ring_finger_tip.x;
    let ringFingerTipY = hand.ring_finger_tip.y;

    let middleFingerTipX = hand.middle_finger_tip.x;
    let middleFingerTipY = hand.middle_finger_tip.y;

    // Wrist info
    let wristX = hand.wrist.x;
    let wristY = hand.wrist.y;
    let wristZ = hand.wrist.z3D;
    /*
    Start drawing on the hands here
    */

function cloudHands(hands) {
  let hasFist = false;
  let hasPinch = false;
  // First loop: check gestures
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    let handgesture = detectHandGesture(hand);
    if (handgesture == "Fist") {
      hasFist = true;
    }
    if (handgesture == "Pinch") {
      hasPinch = true;
      // Save position for lightning
      indexFingerTipX = hand.index_finger_tip.x;
      indexFingerTipY = hand.index_finger_tip.y;
    }
  }
// Second loop: Draw Clouds
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;
    noStroke()
    ellipse(indexFingerTipX, indexFingerTipY, 80, 50)
    ellipse(indexFingerTipX + 10, indexFingerTipY - 10, 80, 50)
    ellipse(indexFingerTipX + 20, indexFingerTipY + 10, 80, 50)

    let handgesture = detectHandGesture(hand)
    if (handgesture == "Fist") {
      noStroke()
      fill(66, 66, 66)
    } else {
      noStroke()
      fill(255, 255, 255)
    }
  }
if (hasFist && hasPinch) {
    drawLightning(indexFingerTipX, indexFingerTipY);
  }
}

function drawLightning(x, y) {
  stroke(255, 255, 0);
  strokeWeight(6);
  // Simple zig-zag lightning shape
  let length = 100;
  let segments = 5;
  let lx = x, ly = y;
  for (let i = 0; i < segments; i++) {
    let nx = lx + random(-20, 20);
    let ny = ly + length / segments;
    line(lx, ly, nx, ny);
    lx = nx;
    ly = ny;
  }
  strokeWeight(0);
}

function FlintknockGun(hand) {
     stroke(110, 73, 34);
    fill(110, 73, 34);
    beginShape();
    vertex(indexFingerTipX + 150, indexFingerTipY - 9);
    vertex(indexFingerTipX - 50, indexFingerTipY - 9);
    vertex(indexFingerTipX)
    endShape(CLOSE);
    stroke(232, 185, 56);
    strokeWeight(5);
    noFill();
    arc(indexFingerTipX, indexFingerTipY, 100, 80, 0, PI);
    arc(indexFingerTipX, indexFingerTipY + 110, 300, 240, PI, -2);
    fill(232, 185, 56);
    ellipse(indexFingerTipX - 197, indexFingerTipY + 160, 130, 90);
    stroke(110, 73, 34);
    noFill();
    arc(indexFingerTipX - 105, indexFingerTipY + 110, 300, 340, PI, -2);
    stroke(232, 185, 56);
    noFill();
    arc(indexFingerTipX - 95, indexFingerTipY + 110, 110, 100, 2.5, PI);
    arc(indexFingerTipX - 205, indexFingerTipY + 146, 110, 200, PI, -2.5);
  
  }

    /*
    Stop drawing on the hands here
    */
    //cloudHands(hands);
    //FlintknockGun(hand);
  }



  //------------------------------------------------------------
  //facePart
  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face
    if (showKeypoints) {
      drawPoints(face)
    }
    // console.log(face);
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
function PirateHat() {
push()
  fill(0);
stroke(0);
strokeWeight(5);
  beginShape();
curveVertex(face.keypoints[54].x, face.keypoints[54].y);
curveVertex(face.keypoints[54].x, face.keypoints[54].y);
  curveVertex(face.keypoints[103].x, face.keypoints[103].y);
  curveVertex(face.keypoints[67].x, face.keypoints[67].y);
  curveVertex(face.keypoints[109].x, face.keypoints[109].y);
curveVertex(face.keypoints[10].x, face.keypoints[10].y);
  curveVertex(face.keypoints[338].x, face.keypoints[338].y);
  curveVertex(face.keypoints[297].x, face.keypoints[297].y);
  curveVertex(face.keypoints[332].x, face.keypoints[332].y);
curveVertex(face.keypoints[284].x, face.keypoints[284].y);
curveVertex(face.keypoints[284].x, face.keypoints[284].y);
curveVertex(face.keypoints[284].x + 30, face.keypoints[284].y + 20);
curveVertex(face.keypoints[284].x + 50, face.keypoints[284].y);
curveVertex(face.keypoints[284].x + 60, face.keypoints[284].y - 20);
  curveVertex(face.keypoints[332].x, face.keypoints[332].y -70);
  curveVertex(face.keypoints[297].x, face.keypoints[297].y - 100);
curveVertex(face.keypoints[338].x, face.keypoints[338].y - 120);
curveVertex(face.keypoints[10].x, face.keypoints[10].y - 130);
curveVertex(face.keypoints[109].x, face.keypoints[109].y - 120);
  curveVertex(face.keypoints[67].x, face.keypoints[67].y - 100);
  curveVertex(face.keypoints[103].x, face.keypoints[103].y - 70);
curveVertex(face.keypoints[54].x - 60, face.keypoints[54].y - 20);
curveVertex(face.keypoints[54].x - 50, face.keypoints[54].y);
curveVertex(face.keypoints[54].x - 30, face.keypoints[54].y + 20);
  endShape(CLOSE);
  pop()
}
function DrawPointMesh() {
  drawPoints(face.leftEye);
  drawPoints(face.leftEyebrow);
  drawPoints(face.lips);
  drawPoints(face.rightEye);
  drawPoints(face.rightEyebrow);
}
    /*
    Stop drawing on the face here
    */
  PirateHat();
  LeftEyeSkull();
  RightEyeSkull();
//DrawPointMesh();
  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}


function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}

function pinchCircle(hand) { // adapted from https://editor.p5js.org/ml5/sketches/DNbSiIYKB
  // Find the index finger tip and thumb tip
  let finger = hand.index_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(0);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

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
