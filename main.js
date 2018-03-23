var i = 0;
var txt = 'Hi, my name is Sarah and I\'m an aspiring User Experience Designer\!';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("about_me").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;