//timeline on nav
let tml = gsap.timeline();
tml.from("#nav h2",{
   y: -20,
   opacity: 0,
   duration: 1,
   delay: 1,
});
tml.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});



gsap.from("h1",{
  opacity: 0,
  duration: 2,
  delay: 1,
  stagger: 0.5,//ek k baad ek animate honge element.
  repeat: -1,
})
gsap.from("#box1", {
  //gsap.to move the item from initial to final and from vice versa
  x: 1200,
  duration: 2,
  delay: 1,
  //rotate: 360,
  backgroundColor: "pink",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true,
  scale: 0.5,
});
gsap.from("#box2", {
  //gsap.to move the item from initial to final and from vice versa
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "pink",
  //borderRadius: "50%",
  repeat: -1,
  yoyo: true,
  scale: 0.5,
});
gsap.to("#box3", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "pink",
  borderRadius: "50%",
  scale: 0.5,
  repeat: -1,//will repeat +1 time the given value to repeat infinite times set value-1
  yoyo: true,
});
//timeline , till now the element are animating asynchronously but in timeline
//animation takes place synchronously.

let tl = gsap.timeline();
tl.to("#sqr1",{
  x: 1200,
  duration: 2,
  delay: 1,
  scale: 1,
});
tl.to("#sqr2", {
  x: 1200,
  duration: 2,
  scale: 1,
});
