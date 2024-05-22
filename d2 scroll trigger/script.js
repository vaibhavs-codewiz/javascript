//use of pin property
gsap.to("#newpage2 h1",{
    transform:"translateX(-190%)",
    scrollTrigger:{
        trigger:"#newpage2",//always trigger the parent of element you wants to apply 
                            //pin to(here newpage2 is the parent)
        scroller: "body",
        markers: true,
        start:"top 0%",//at the exact start of page.
        end:"top -100%",//can control the speed of scrolling by this.
        scrub: 2,
        pin: true,//as you scroll down the page , h1 scroll to extreme right.
    }
})


//scroll trigger : this makes the animation to animate only when we scroll down to
//that page otherwise , animation already happen when we are at home page .
//the time of execution of animation is controlled by scroll trigger that can be achieve
//when included scroll trigger cdn(gsap site).
//scroll trigger is plugin of gsap.
gsap.from("#page1 #box", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
});
// gsap.from("#page2 #box",{
//   scale: 0,
//   duration: 2,
//   rotate: 360,
//   //scroll trigger :-
//   scrollTrigger:{
//     trigger:"#page2 #box", //kisko trigger krna h
//     scroller:"body", //generally keep value as body
//     markers:true, //the start end points are visible
//     start:"top 60%" //it is the start point of animation.
//   }
// });
gsap.from("#page2 h1",{
    opacity: 0,
    duration: 2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        //markers: true,
        start:"top 50%"
    }
})
gsap.from("#page2 h2", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: "#page2 h2",
    scroller: "body",
    //markers: true,
    start: "top 50%",
  },
});

gsap.from("#page3 #box", {
  scale: 0,
  duration: 2,
  rotate: 720,
  scrollTrigger:{
    trigger:"#page3 #box",
    scroller:"body",
    //markers:true,
    start:"top 60%",
    end:"top 30%",
    scrub: 2 //value ranges from 1 to 5 based on smoothness
  }
});
