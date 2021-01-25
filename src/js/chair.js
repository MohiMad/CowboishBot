const chair = document.getElementById("chairButton");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    if (document.body.scrollTop > 3900 || document.documentElement.scrollTop > 3900) {
      chair.style.display = "none";
    } else chair.style.display = "block";
  } else {
    chair.style.display = "none";
  }
}
//3529

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

