// ----=  HANDS  =----
let balls = [];
let ballSpeed = 8;
let prevThumbsUp = [];
/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {
  // hands part
  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    //console.log(hand);
    if (showKeypoints) {
      drawConnections(hand)
    }

    // This is how to load in the x and y of a point on the hand.
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

    // fill(225, 225, 0);
    // ellipse(indexFingerTipX, indexFingerTipY, 30, 30);
    // ellipse(pinkyFingerTipX, pinkyFingerTipY, 30, 30);
    // ellipse(thumbTipX, thumbTipY, 30, 30);
    // ellipse(ringFingerTipX, ringFingerTipY, 30, 30);
    // ellipse(middleFingerTipX, middleFingerTipY, 30, 30);
    
    // fingerPuppet(indexFingerTipX, indexFingerTipY);
    Flintlock_Pistol(hand);
    // chameleonHandPuppet(hand)
    //cloudHands(hands)
    /*
    Stop drawing on the hands here
    */
  }
  // You can make addtional elements here, but keep the hand drawing inside the for loop. 
  //------------------------------------------------------

}
  //Main Function that calls all the other functions
function Flintlock_Pistol(hand) {
  let gun_x = hand.index_finger_tip.x - 200;
  let gun_y = hand.index_finger_tip.y;

  let Light_Grey = color(173, 184, 194);
  let Black = color(0, 0, 0);
  let Grey = color(133, 148, 163);
  let Brown = color(137, 81, 41);
  
 while (prevThumbsUp.length < hands.length) prevThumbsUp.push(false);

  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;

    let handgesture = detectHandGesture(hand);

 if (handgesture == "Thumbs Up" && !prevThumbsUp[i]) {
      let gun_x = indexFingerTipX;
      let gun_y = indexFingerTipY;
      balls.push({
        x: gun_x + 50,
        y: gun_y + 10
      });
    }
    prevThumbsUp[i] = (handgesture == "Thumbs Up");
 for (let i = balls.length - 1; i >= 0; i--) {
    fill(0);
    noStroke();
    ellipse(balls[i].x, balls[i].y, 10, 10);
    balls[i].x += ballSpeed;
    if (balls[i].x > width) {
      balls.splice(i, 1);
    }
  }
}
// Draw the gun parts
// Trigger
  fill(Grey);
  stroke(Black);
  strokeWeight(1);
  beginShape();
  vertex(gun_x + 25, gun_y + 25);
  curveVertex(gun_x + 23, gun_y + 29);
  curveVertex(gun_x + 25, gun_y + 39);
  curveVertex(gun_x + 21, gun_y + 33);
  curveVertex(gun_x + 20, gun_y + 28);
  vertex(gun_x + 23, gun_y + 25);
  endShape(CLOSE);
// Trigger Guard
  fill(Light_Grey);
  stroke(Black);
  strokeWeight(1);
  beginShape();
  vertex(gun_x + 28, gun_y + 26);
  bezierVertex(gun_x + 50, gun_y + 49, gun_x - 3, gun_y + 47, gun_x + 15, gun_y + 28);
  vertex(gun_x + 15, gun_y + 27);
  vertex(gun_x - 2, gun_y + 34);
  vertex(gun_x - 8, gun_y + 39);
  bezierVertex(gun_x + 15, gun_y + 30, gun_x, gun_y + 40, gun_x + 15, gun_y + 45);
  bezierVertex(gun_x + 50, gun_y + 52, gun_x + 35, gun_y + 25, gun_x + 39, gun_y + 35);
  bezierVertex(gun_x + 35, gun_y + 25, gun_x + 40, gun_y + 30, gun_x + 45, gun_y + 25);
  vertex(gun_x + 30, gun_y + 20);
  endShape(CLOSE);
// Stock
beginShape();
  fill(Light_Grey);
  stroke(Black);
  strokeWeight(1);
  vertex(gun_x - 19, gun_y + 57);
  bezierVertex(gun_x - 20, gun_y + 95, gun_x - 70, gun_y + 75, gun_x - 48, gun_y + 52, gun_x, gun_y)
  vertex(gun_x - 45, gun_y + 50);
  endShape(CLOSE);

  fill(Brown);
  stroke(Black);
  strokeWeight(1);
  beginShape();
  vertex(gun_x + 70, gun_y);
  vertex(gun_x + 70, gun_y + 7);
  vertex(gun_x + 73, gun_y + 10);
  vertex(gun_x + 150, gun_y + 10);
  vertex(gun_x + 150, gun_y + 20);
  bezierVertex(gun_x + 100, gun_y + 25, gun_x + 100, gun_y + 25, gun_x + 80, gun_y + 25, gun_x, gun_y);
  bezierVertex(gun_x + 30, gun_y + 25, gun_x + 20, gun_y + 25, gun_x, gun_y + 35, gun_x, gun_y);
  bezierVertex(gun_x - 10, gun_y + 40, gun_x - 15, gun_y + 50, gun_x - 20, gun_y + 60, gun_x, gun_y);
  bezierVertex(gun_x - 20, gun_y + 75, gun_x - 55, gun_y + 70, gun_x - 50, gun_y + 55, gun_x, gun_y);
  bezierVertex(gun_x - 35, gun_y + 15, gun_x, gun_y - 10, gun_x + 70, gun_y, gun_x, gun_y);
  endShape(CLOSE);

// Frizzen
beginShape();
  fill(Light_Grey);
  stroke(Black);
  strokeWeight(1);
  vertex(gun_x + 30, gun_y + 5);
  bezierVertex(gun_x + 45, gun_y, gun_x + 55, gun_y, gun_x + 60, gun_y + 5);
  bezierVertex(gun_x + 60, gun_y + 6, gun_x + 60, gun_y + 10, gun_x + 62, gun_y + 10);
  bezierVertex(gun_x + 123, gun_y + 20, gun_x + 40, gun_y + 21, gun_x + 50, gun_y + 21);
  bezierVertex(gun_x + 23, gun_y + 23, gun_x + 23, gun_y + 23, gun_x + 10, gun_y + 23);
  bezierVertex(gun_x - 5, gun_y + 23, gun_x + 0, gun_y + 15, gun_x + 29, gun_y + 5);
  vertex(gun_x + 29, gun_y + 5);
  endShape(CLOSE);
  
  beginShape();
  fill(Grey);
  stroke(Black);
  strokeWeight(1);
  vertex(gun_x + 57, gun_y + 6);
  bezierVertex(gun_x + 59, gun_y + 8, gun_x + 57, gun_y + 12, gun_x + 60, gun_y + 13);
  bezierVertex(gun_x + 110, gun_y + 17, gun_x + 40, gun_y + 18, gun_x + 47, gun_y + 18);
  bezierVertex(gun_x + 20, gun_y + 20, gun_x + 20, gun_y + 20, gun_x + 7, gun_y + 20);
  bezierVertex(gun_x + 3, gun_y + 20, gun_x + 3, gun_y + 18, gun_x + 31, gun_y + 8);
  bezierVertex(gun_x + 42, gun_y + 3, gun_x + 52, gun_y + 3, gun_x + 57, gun_y + 6);
  vertex(gun_x + 57, gun_y + 6);
  endShape(CLOSE);
// Cock
  beginShape();
  fill(Light_Grey);
  stroke(Black);
  strokeWeight(1);
  vertex(gun_x + 49, gun_y + 11);
  bezierVertex(gun_x + 50, gun_y + 10);
  curveVertex(gun_x + 50, gun_y + 5);
  curveVertex(gun_x + 37, gun_y - 4);
  curveVertex(gun_x + 23, gun_y - 7);
  curveVertex(gun_x + 18, gun_y - 13);
  curveVertex(gun_x + 18, gun_y - 8);
  curveVertex(gun_x + 23, gun_y - 4);
  curveVertex(gun_x + 38, gun_y);
  curveVertex(gun_x + 42, gun_y + 7);
  curveVertex(gun_x + 33, gun_y + 9);
  bezierVertex(gun_x + 36, gun_y + 12);
  endShape(CLOSE);
// Barrel
fill(Grey);
  stroke(Black);
  strokeWeight(1);
  beginShape();
  vertex(gun_x + 70, gun_y + 1);
  vertex(gun_x + 190, gun_y + 1);
  vertex(gun_x + 200, gun_y - 2);
  bezierVertex(gun_x + 205, gun_y, gun_x + 205, gun_y + 10, gun_x + 200, gun_y + 14, gun_x + 200, gun_y + 1);
  vertex(gun_x + 200, gun_y + 14);
  vertex(gun_x + 190, gun_y + 11);
  vertex(gun_x + 150, gun_y + 11);
  vertex(gun_x + 150, gun_y + 10);
  vertex(gun_x + 73, gun_y + 10);
  endShape(CLOSE);

  beginShape();
  fill(Light_Grey)
  stroke(Black);
  strokeWeight(1);
  vertex(gun_x + 70, gun_y);
  vertex(gun_x + 73, gun_y);
  vertex(gun_x + 73, gun_y + 7);
  vertex(gun_x + 74, gun_y + 10);
  vertex(gun_x + 71, gun_y + 10);
  vertex(gun_x + 70, gun_y + 7);
  endShape(CLOSE);

  beginShape();
  fill(Light_Grey)
  stroke(Black);
  strokeWeight(1);
  vertex(gun_x + 88, gun_y);
  vertex(gun_x + 91, gun_y);
  vertex(gun_x + 91, gun_y + 10);
  vertex(gun_x + 88, gun_y + 10);
  endShape(CLOSE);

  beginShape();
  fill(Light_Grey)
  stroke(Black);
  strokeWeight(1);
  vertex(gun_x + 115, gun_y);
  vertex(gun_x + 118, gun_y);
  vertex(gun_x + 118, gun_y + 10);
  vertex(gun_x + 115, gun_y + 10);
  endShape(CLOSE);

  beginShape();
  fill(Light_Grey)
  stroke(Black);
  strokeWeight(1);
  vertex(gun_x + 187, gun_y);
  vertex(gun_x + 190, gun_y);
  vertex(gun_x + 190, gun_y + 12);
  vertex(gun_x + 187, gun_y + 12);
  endShape(CLOSE);

// Ramrod
fill(Grey);
  stroke(Black);
  strokeWeight(1);
  rect(gun_x + 150, gun_y + 14, 15, 3);
  
  fill(Grey);
  stroke(Black);
  strokeWeight(1);
  beginShape();
  vertex(gun_x + 165, gun_y + 13);
  vertex(gun_x + 175, gun_y + 11);
  bezierVertex(gun_x + 178, gun_y + 13, gun_x + 178, gun_y + 18, gun_x + 175, gun_y + 20);
  vertex(gun_x + 175, gun_y + 20);
  vertex(gun_x + 165, gun_y + 18);
  endShape(CLOSE);


  fill(Light_Grey);
  stroke(Black);
  strokeWeight(1);
  beginShape();
  vertex(gun_x + 150, gun_y + 10);
  vertex(gun_x + 153, gun_y + 10);
  vertex(gun_x + 153, gun_y + 17);
  bezierVertex(gun_x + 153, gun_y + 20, gun_x + 150, gun_y + 20, gun_x + 147, gun_y + 20);
  bezierVertex(gun_x + 150, gun_y + 20, gun_x + 150, gun_y + 17, gun_x + 150, gun_y + 17);
  endShape(CLOSE);
}

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
    ellipse(indexFingerTipX, indexFingerTipY, 80, 50)
    ellipse(indexFingerTipX + 10, indexFingerTipY - 10, 80, 50)
    ellipse(indexFingerTipX + 20, indexFingerTipY + 10, 80, 50)
    noStroke()
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


function fingerPuppet(x, y) {
  fill(255, 38, 219) // pink
  ellipse(x, y, 100, 20)
  ellipse(x, y, 20, 100)

  fill(255, 252, 48) // yellow
  ellipse(x, y, 20) // draw center 

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

function chameleonHandPuppet(hand) {
  // Find the index finger tip and thumb tip
  // let finger = hand.index_finger_tip;

  let finger = hand.middle_finger_tip; // this finger now contains the x and y infomation! you can access it by using finger.x 
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

  let indexFingerTipX = hand.index_finger_tip.x;
  let indexFingerTipY = hand.index_finger_tip.y;
  fill(0)
  circle(indexFingerTipX, indexFingerTipY, 20);

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


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {
  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 10);
  }
  pop()
}


