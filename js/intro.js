
const tl = gsap.timeline({
  defaults: {
    ease: 'Circ.easeUut'
  }
});


tl.to('.intro__logo', {
  width: '120px',
  duration: 1
});
tl.to('.intro__contet-title', {
  width: '200px',
  duration: 0.5,
  delay: 0.5
});
tl.to('.intro', {
  top: '-100%',
  delay: 1,
  duration: 1.2
});