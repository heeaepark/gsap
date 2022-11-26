window.addEventListener('load', animation)

function animation(){

  const TL = gsap.timeline({repeat: -1})

  TL
  .from('.vertical-slider p', {
    y: 100, 
    autoAlpha: 0, 
    duration: 0.75, 
    stagger: 0.75
  })
  .to('.vertical-slider p', {
    y: -100, 
    autoAlpha: 0, 
    duration: 0.75, 
    stagger: 0.75
  }, 0.75) //타임라인 시작 후 0.75초 마다 실행
}
