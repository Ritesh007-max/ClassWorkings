const picture = document.getElementById("picture");
const img1Btn = document.getElementById("img1Btn");
const img2Btn = document.getElementById("img2Btn");

img1Btn.addEventListener("click", () => {
  picture.src = "https://th.bing.com/th/id/OIP.rMKydbZB_oaAfaoJdp25JAHaE7?w=244&h=180&c=7&r=0&o=7&pid=1.7&rm=3";
});

img2Btn.addEventListener("click", () => {
  picture.src = "https://th.bing.com/th/id/OIP.j7sZ8mcnlXSXVD_mNzlFvQHaEK?w=289&h=180&c=7&r=0&o=7&pid=1.7&rm=3";
});