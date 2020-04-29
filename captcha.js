function generatecaptcha() {
  var sample = "abcdefghefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var a=sample[Math.floor(Math.random()*(62+1))];
var b=sample[Math.floor(Math.random()*(62+1))];
var c=sample[Math.floor(Math.random()*(62+1))];
var d=sample[Math.floor(Math.random()*(62+1))];
var e=sample[Math.floor(Math.random()*(62+1))];
var f=sample[Math.floor(Math.random()*(62+1))];
  return a+b+c+d+e+f;
}
document.write(generatecaptcha());
