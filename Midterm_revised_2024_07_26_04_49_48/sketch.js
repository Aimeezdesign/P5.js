let sentence = "FUTURE NAVIGATOR:";
let customFont;

function preload() {
  customFont = loadFont('Akzidenz Grotesk Pro XBd Cnd Italic.otf');
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
  background(255);

  class Car {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 400;
      this.height = 100;
      this.color = color(210, 80, 80);
    }

    display() {
      push(); // Start drawing the car
      fill(this.color);
      rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);

      fill(this.color);
      let spoilerWidth = this.width / 2;
      let spoilerHeight = this.height / 4;
      rect(this.x - spoilerWidth / 2, this.y - this.height / 2 - spoilerHeight, spoilerWidth, spoilerHeight);

      fill(216, 10, 95);
      let windowWidth = this.width / 4;
      let windowHeight = this.height / 3;
      let windowGap = windowHeight / 4;
      let windowHorizontalHeight = windowHeight / 2 - windowGap / 2;

      rect(this.x - windowWidth / 2, this.y - windowHeight / 2, windowWidth, windowHeight);
      rect(this.x - windowWidth / 2, this.y - windowGap / 2, windowWidth, windowHorizontalHeight);

      fill(60, 100, 100);
      let headlightWidth = this.height / 2;
      let headlightHeight = this.height / 3;
      let headlightOffset = this.width / 3;
      rect(this.x - headlightOffset - headlightWidth / 2, this.y - this.height / 2 + 10, headlightWidth, headlightHeight);
      rect(this.x + headlightOffset - headlightWidth / 2, this.y - this.height / 2 + 10, headlightWidth, headlightHeight);

      fill(0, 20, 20);
      let wheelSize = this.width / 6;
      ellipse(this.x - this.width / 3, this.y + this.height / 2, wheelSize);
      ellipse(this.x + this.width / 3, this.y + this.height / 2, wheelSize);
      pop(); // End drawing the car
    }
  }

  let car = new Car(width / 2, height / 2);

  let baseHue = 210;
  let hueVariation = 30;
  let rectWidth = width / 11;

  for (let i = 0; i < 11; i++) {
    let hue = random(baseHue - hueVariation, baseHue + hueVariation);
    let rectColor = color(hue, 80, 80);
    fill(rectColor);
    rect(rectWidth * i, 0, rectWidth, rectWidth);
  }

  for (let i = 0; i < 11; i++) {
    let hue = random(baseHue - hueVariation, baseHue + hueVariation);
    let rectColor = color(hue, 80, 80);
    fill(rectColor);
    rect(rectWidth * i, height - rectWidth, rectWidth, rectWidth);
  }

  // Set a random color for the sentence
  let sentenceColor = color(random(baseHue - hueVariation, baseHue + hueVariation), 80, 80);
  fill(sentenceColor);

  textFont(customFont);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(sentence, width / 2, height / 5);

  car.display();
}
