document.addEventListener("DOMContentLoaded", function() {
  let hamburger = document.getElementById("hamburger");

  hamburger.addEventListener("click", showuul); 

  function showuul() {
      document.querySelector(".ul-nav").classList.toggle("active");
  }
});
   

