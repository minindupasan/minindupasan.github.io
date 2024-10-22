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
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});