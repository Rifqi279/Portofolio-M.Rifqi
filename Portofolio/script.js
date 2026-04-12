// ================= TYPING EFFECT =================
const words = ["student at SMKN 4 Bandung"];
let i = 0, j = 0, isDeleting = false;

function type(){
  let current = words[i];

  if(!isDeleting){
    document.getElementById("typing").textContent = current.substring(0, j++);
    if(j > current.length){
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if(j === 0){
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();


// ================= NAVBAR MOBILE =================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});


// ================= SMOOTH SCROLL + OFFSET =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    const offset = 80; // tinggi navbar
    const top = target.offsetTop - offset;

    window.scrollTo({
      top: top,
      behavior: "smooth"
    });

    // AUTO CLOSE MENU (MOBILE)
    if (window.innerWidth <= 768) {
      navLinks.style.display = "none";
    }
  });
});