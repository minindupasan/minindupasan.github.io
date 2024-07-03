const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

const button = document.querySelector(".readmore-button");
button.addEventListener("click", (e) => {
  e.preventDefault;
  button.classList.add("animate");
  setTimeout(() => {
    button.classList.remove("animate");
  }, 600);
});

let readmoreButton = document.getElementById('readmore-button');
let readmoreText = document.getElementById('readmore-text');

if (readmoreButton && readmoreText) {
  readmoreButton.addEventListener('mouseover', () => {
    readmoreButton.style.width = '30%';
    readmoreText.style.display = 'none';
  });
  readmoreButton.addEventListener('mouseout', () => {
    readmoreButton.style.width = '5%';
    readmoreText.style.display = 'flex';
  });
}