// Get the button
let mybutton = document.getElementById("myBtn");

// Controlling the button's scroll 
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1150 || document.documentElement.scrollTop > 1150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the button is clicked, the user is scrolled back to the top of the web page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;  
}