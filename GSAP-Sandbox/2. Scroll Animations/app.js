gsap.from('.b2 h2', {
  duration: 1,
  autoAlpha: 0,
  y: 100,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".b2 h2",
    markers: true,
    //Trigger Scroller
    /* start: "top bottom", //트리거(start), scroller :: 해석 - 트리거의 탑 영역이 뷰포트 바닥과 일치하면 실행
    end: "bottom top" //트리거(end), scroller :: 해석 - 트리거의 바닥 영역이 뷰포트 상단과 일치하면 종료 */
    start: "top 80%",
    end: "bottom 30%",
    //toggleActions: "onEnter / onLeave / onEnterBack / onLeaveBack"
    /* 해석하자면
      scroll-start가 start트리거와 만나면 onEnter
      scroll-end가 end트리거와 만나면 onLeave
      scroll-start가 start트리거와 만난 뒤 다시 만나면 onLeaveBack
      scroll-end가 end트리거와 만난 뒤 다시 만나면 onEnterBack
    */
    toggleActions: "play pause reverse reset",
    onEnter: () => console.log("onEnter"),
    onLeave: () => console.log("onLeave"),
    onEnterBack: () => console.log("onEnterBack"),
    onLeaveBack: () => console.log("onLeaveBack"),
    scrub: 0.5,
  }
})

ScrollTrigger.create({
  trigger: ".b2",
  pin: true,
  markers: {startColor: "orange", endColor: "purple"},
  //trigger scrolled
  end: "bottom 50%" //start max center percentage px top bottom
})