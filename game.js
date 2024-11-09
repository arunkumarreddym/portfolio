document.addEventListener("DOMContentLoaded", () => {
    const skillBoxes = document.querySelectorAll(".skill-box");
    const colors = ["#ff99cc", "#66ccff", "#ffb6c1", "#ffdd57", "#ff6347"];
    
    skillBoxes.forEach((box, index) => {
      box.style.color = colors[index % colors.length];
      box.addEventListener("mouseover", () => {
        box.style.color = "#333"; 
        box.style.backgroundColor = "#888";
      });
      box.addEventListener("mouseout", () => {
        box.style.color = colors[index % colors.length];
        box.style.backgroundColor = "#ffb6c1";
      });
    });
  });
  