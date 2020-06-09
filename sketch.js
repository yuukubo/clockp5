// clockp5

let game_title = "* clockp5 * c2.0"
let [canvas_W, canvas_H] = [600, 400];
let clock_X = canvas_W / 2;
let clock_Y = canvas_H / 2;
let clock_W = 200;
let clock_H = 100;
let clock_RGB = [150, 150, 150];
let is_clock_on = 0;
let background_RGB = [230, 230 ,230];
let on_RGB = [250, 250, 250, 150];
let off_RGB = [50, 50, 50, 150];
let is_touch = 0;

function setup() {
  window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove",  function (event) { event.preventDefault(); }, { passive: false });
  createCanvas(canvas_W, canvas_H);
  rectMode(CENTER);
}
 
function draw() {
  let now = new Date();

  background(background_RGB[0], background_RGB[1], background_RGB[2]);
  set_game_title();
  set_clock(clock_RGB[0], clock_RGB[1], clock_RGB[2], clock_X, clock_Y, clock_W, clock_H, now);
  if (1 == is_touch) {
    touched();
    is_touch = 0;
  }
  set_pointer();
}

function set_pointer() {
  push();
  noStroke();
  fill(255, 255, 0)
  circle(mouseX, mouseY, 4);
  pop();
}

function touchStarted() {
  is_touch = 1;
}
function touched() {
  mousePressed();
  is_touch = 0;
}
function touchEnded() {
  is_touch = 0;
}
function mousePressed() {
  if ((clock_X - clock_W / 2 < mouseX && mouseX < clock_X + clock_W / 2) && (clock_Y - clock_H / 2 < mouseY && mouseY < clock_Y + clock_H / 2)) {
    if (is_clock_on) {
      is_clock_on = 0;
    } else {
      is_clock_on = 1;
    }
  }
}
function set_clock(clock_R, clock_G, clock_B, clock_X, clock_Y, clock_W, clock_H, now) {
  push();
  noStroke();
  rectMode(CENTER);
  fill(clock_R, clock_G, clock_B);
  rect(clock_X, clock_Y, clock_W, clock_H, 4);
  if (!is_clock_on) {
    fill(clock_R + 30, clock_G + 30, clock_B + 30);
    rect(clock_X - 5, clock_Y -5, clock_W, clock_H, 4);
  }

  textSize(20);
  textFont("Crimson Text");
  textAlign(CENTER, CENTER);
  noStroke();
  fill(10);
  text(nf(now.getHours(), 2) + " : " + nf(now.getMinutes(), 2) + " : " + nf(now.getSeconds(), 2), clock_X, clock_Y);

  pop();
}

function set_game_title() {
  push();
  textSize(10);
  textFont("Comic Sans MS");
  textAlign(CENTER, CENTER);
  noStroke();
  fill(10);
  text(game_title, canvas_W * 9 / 10, canvas_H -20);
  pop();
}
