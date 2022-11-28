const slideWrap = document.querySelector('.slider-wrap');
const slides = Array.from(document.querySelectorAll('.slide'))
const slideWrap_wid = slideWrap.offsetWidth;
const slide_width = slideWrap_wid / slides.length
console.log(slideWrap_wid);
console.log(slide_width);
console.log(slides.length);

window.addEventListener('load', horizon);

function horizon() {
  const TL = gsap.timeline({
    scrollTrigger: {
      trigger: ".s2",
      markers: true,
      start: "bottom bottom",
      pin: true,
      //trigger scrolled
      end: "+=300% top",
      scrub: 0.5,
    }
  });
  TL
  .to(".slider-wrap",{
    x: - (slideWrap_wid - slide_width),
  })

}