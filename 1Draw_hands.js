// ----=  HANDS  =----
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

    // chameleonHandPuppet(hand)
    //cloudHands(hands)
    /*
    Stop drawing on the hands here
    */
  }
  // You can make addtional elements here, but keep the hand drawing inside the for loop. 
  //------------------------------------------------------
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