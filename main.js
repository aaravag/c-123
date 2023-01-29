function setup() {
    canvas = createCanvas(300, 200);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('MobileNet',modelLoaded);
  }