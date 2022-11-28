const slideWrap = document.querySelector('.slider-wrap');
const slides = Array.from(document.querySelectorAll('.slide'))
let slideWrap_wid = slideWrap.offsetWidth;
let window_wid = window.innerWidth;


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
    x: - (slideWrap_wid - window_wid),
  })
}

window.addEventListener('load', horizon);
window.addEventListener('resize', () => {
  slideWrap_wid = slideWrap.offsetWidth;
  window_wid = window.innerWidth;
  horizon()
});