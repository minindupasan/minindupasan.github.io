const button = document.querySelector(".readmore-button");
button.addEventListener("click", (e) => {
  e.preventDefault;
  button.classList.add("animate");
  setTimeout(() => {
    button.classList.remove("animate");
  }, 600);
});

document.addEventListener('mousemove',(e)=>{
  console.log(e)

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchor = document.getElementById('anchor');
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width/2;
    const anchorY = rekt.top + rekt.height/2;

    const angleDeg = angle(mouseX,mouseY, anchorX, anchorY);
    console.log(angleDeg);

    const rotate = document.querySelectorAll('.readmore-icon')
    rotate.forEach((button)=>{
      button.style.transform = `rotate(${90+angleDeg}deg)`;
    })
  }  
)
function angle(cx,cy,ex,ey){
  const dy = ey - cy;
  const dx = ex - cx;
  let rad = Math.atan2(dy,dx);
  let deg = rad * 180 / Math.PI;
  return deg;
}