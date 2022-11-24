const img1 = document.querySelector('.img1');
const btn = document.querySelector('.btn');
/* gsap.to(img1, {
  x: '',
  y: 100,
  backgroundColor: '#fff',
  rotate: '45deg',
  duration: 1,
}); */

/* gsap.from(img1, {
  autoAlpha: 0,
  duration: 5,
  rotation: 45,
  scale: 0.5
}); */

btn.addEventListener('click', () => {
  gsap.fromTo(img1, {
    autoAlpha: 0
  }, 
  {
    autoAlpha: 1,
    duration: 10,
  });
});