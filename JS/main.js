let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function () {
    if (!isBurgerOpen) {
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 50px, center";
        isBurgerOpen =true;
    }

    else if (isBurgerOpen) {
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 50px";
        isBurgerOpen = false;
    }
}

//Intersection Observer for Skill Bars Animation

document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".skill-bar");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.5
  });

  skillBars.forEach(bar => {
    observer.observe(bar);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Animate skill bars
  const skillBars = document.querySelectorAll(".skill-bar");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => observer.observe(bar));

  // Animate category boxes
  const categoryBoxes = document.querySelectorAll(".index-category-box");
  categoryBoxes.forEach(box => observer.observe(box));
});

// Intersection Observer for Animations on Scroll main section
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  // Animate skill bars
  document.querySelectorAll(".skill-bar").forEach(el => observer.observe(el));

  // Animate category boxes
  document.querySelectorAll(".index-category-box").forEach(el => observer.observe(el));

  // Animate main section
  const mainSection = document.querySelector("main");
  if (mainSection) observer.observe(mainSection);
});
