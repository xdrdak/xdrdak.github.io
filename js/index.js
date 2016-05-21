var square = document.querySelector('#js-square');
var square2 = document.querySelector('#js-square-2');
var square3 = document.querySelector('#js-square-3');
var extremeInElasticOutEasing = mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,-15.815625 53.7148438,-19.1218754 60.4981394,0 C62.2625924,4.97393188 66.4286578,6.07928485 68.3303467,0 C71.3633751,-6.23011049 74.5489919,-1.10166123 75.7012545,0 C79.6946191,3.60945678 84.2063904,-0.104182975 84.2063905,0 C87.5409362,-2.25875668 90.4589294,-0.0327241098 93.4950242,0 C97.3271182,0.20445262 100,-0.104182352 100,0');
var translateCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');

function createTween(delay, el) {
  return new mojs.Tween({
    repeat:   0,
    delay:    delay,
    duration: 1200,
    onUpdate: function (progress) {
      var extremeInElasticOutProgress = extremeInElasticOutEasing(progress);
      el.style.transform = 'scale(' + (0.001 + (extremeInElasticOutProgress)) + ')';
      el.style.borderRadius = (100 - translateCurve(progress) * 100) + '%';
    }
  });
}

createTween(0, square).run();
createTween(250, square2).run();
createTween(450, square3).run();
