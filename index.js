const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".list");
const links = document.querySelectorAll(".list a");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active');
});

links.forEach(links => {
    links.addEventListener("click", () =>{
        hamburger.classList.remove('active');
        navBar.classList.remove('active');
    })
})



window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("back-to-top-btn").style.display = "block";
    } else {
      document.getElementById("back-to-top-btn").style.display = "none";
    }
  };
  
  document.getElementById("back-to-top-btn").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };