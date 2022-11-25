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
/* 
btn.addEventListener('click', () => {
  gsap.fromTo(img1, {
    autoAlpha: 0
  }, 
  {
    autoAlpha: 1,
    duration: 10,
  });
}); */
/* gsap.from(img1, {
  autoAlpha: 0,
  y: -100,
  rotation: 90,
  ease: "bounce",
  duration: 2,
  delay: 0.5,
  repeat: -1, // -1은 infinity
  repeatDelay: 0.2,
  yoyo: true //reverse
});  */
/* gsap.from('img', {
  autoAlpha: 0,
  y: -100,
  ease: "power4",
  duration: 2,
  stagger: (ind) => {
    console.log(ind);
  },
});  */
/* gsap.from('img', {
  autoAlpha: 0,
  y: -100,
  ease: "power4",
  duration: 2,
  stagger: { //순차 재생 
    each: 0.5,
    from: "center",
  }
}); 
 */

/* gsap.to(img1, {
  x: 100,
  repeat: 1,
  duration: 1,
}); */

gsap.registerEffect({
  name: "imgAni",
  effect: (targets, config) => {
    return gsap.to(targets, {duration: config.duration, scale: config.scale, y: 200, rotation: 360})
  },
  default: {
    duration: 1,
    scale: 1,
  }
});
gsap.effects.imgAni('.img1', {duration: 2});
gsap.effects.imgAni('.img2', {duration: 6, scale: 2});
gsap.effects.imgAni('.img3', {duration: 8});