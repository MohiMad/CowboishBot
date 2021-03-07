const chair = document.getElementById("chairButton");


function scrollFunction() {

  if (window.innerWidth <= 768 || document.documentElement.clientWidth <= 768 || document.body.clientWidth <= 768) {
    return chair.style.display = "none";
  }

  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    if (document.body.offsetTop > document.querySelector("footer").offsetTop || document.documentElement.offsetTop > document.querySelector("footer").offsetTop) {
      chair.style.display = "none";
    } else {
      chair.style.display = "block";
    }
  } else {
    chair.style.display = "none";
  }
}

window.onscroll = function () { scrollFunction(); };

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

