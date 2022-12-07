
    const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor__circle');
    
    const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
    const pos = { x: 0, y: 0 }; // cursor's coordinates
    const speed = 0.1; // between 0 and 1
    
    const updateCoordinates = e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    
    window.addEventListener('mousemove', updateCoordinates);
    
    
    function getAngle(diffX, diffY) {
      return Math.atan2(diffY, diffX) * 180 / Math.PI;
    }
    
    function getSqueeze(diffX, diffY) {
      const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
      );
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
    }
    
    
    const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);
      
      pos.x += diffX * speed;
      pos.y += diffY * speed;
      
      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);
      
      const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
      const rotate = 'rotate(' + angle +'deg)';
      const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
    
      cursor.style.transform = translate;
      cursorCircle.style.transform = rotate + scale;
    };
    
    function loop() {
      updateCursor();
      requestAnimationFrame(loop);
    }
    
    requestAnimationFrame(loop);
    
    
    
    const cursorModifiers = document.querySelectorAll('[cursor-class]');
    
    cursorModifiers.forEach(curosrModifier => {
      curosrModifier.addEventListener('mouseenter', function() {
        const className = this.getAttribute('cursor-class');
        cursor.classList.add(className);
      });
      
      curosrModifier.addEventListener('mouseleave', function() {
        const className = this.getAttribute('cursor-class');
        cursor.classList.remove(className);
      });
    });
 
  
    $(function(){
        
        hieuungload = new TimelineMax({onComplete:noidungvaodi}); 
        hieuungload
        .from($('.loading'),
          0.5,{
            opacity: 1,
            ease: Expo.easeInOut
          })
        
    
        .from($('.circle-ob'),1.5,
          {
            scale:80,
            opacity:0,
            ease: Expo.easeInOut
          })
       
          .from($('.gr-text-intro'),0.8,
          {
            scale:50,

           opacity:0,
            ease: Expo.easeInOut
          })
   
    
        //lap lai circle
      .to($('.circle-ob'),0.3,{scale:0.3,ease: Expo.easeInOut})
        
        .to($('.circle-ob'),0.3,{scale:0.4,ease: Expo.easeInOut})
        .to($('.circle-ob'),0.3,{scale:0.5,ease: Expo.easeInOut})
        .to($('.circle-ob'),0.3,{scale:1,ease: Elastic.easeOut.config(1, 0.3)})
    
    
    .from($('.line-loading'),1,
          {
          x:-100,
            width:0,
          opacity:0,
          ease: Expo.easeInOut
          })
    
        //ket thuc 
       .to($('.circle-ob'),1.5,{
          scale:60,
          opacity:0,
          ease: Expo.easeInOut
        })
    
    
    
        .to($('.gr-text-intro'),0.8,{
          y:-50,
          color:"#fff;",
          opacity:0,
          ease: Expo.easeInOut
        })
    
         .to($('.line-loading'),0.8,
          {
              x:0,
              width:400,
              color:"#fff;",
              ease: Expo.easeInOut
          })
    
         .to($('.line-loading'),0.8,
          {
              x:0,
              width:300,
              opacity:0,
              ease: Expo.easeInOut
          })
    
        .to($('.loading'),1,
        {
          
          x:20,
          scale:0,
          display:'none',
          ease: Expo.easeInOut
        })

      
    
    
    
    
    
    
    
         hieuungnoidung = new TimelineMax({paused:true}); 
    
         hieuungnoidung
          .from($('.home-page.bg-slide'),0.8,
          {
           
            scale:20,
            opacity:0,

            ease: Expo.easeInOut

          }
            
          )

         .from($('.home-page.logo-brand'),0.4,
          {
            
            y: 5,
           opacity: 0,
           ease: Expo.easeInOut
          })
    
         .from($('.home-page.block-navigation'),0.4,
          {
            
             y: 5,
     opacity: 0,
     ease: Expo.easeInOut
         }
          )
         .from($('.home-page.icon-navigation'),0.4,
          {
            
            y: -5,
            opacity:0,

            ease: Expo.easeInOut

          }
            
          )

         .from($('.home-page.block-navigation-icon-social'),0.4,
          {
            
            y: 5,
            opacity:0,

            ease: Expo.easeInOut

          }
            
          )

         .from($('.home-page.btn-become-partner'),0.5,
          {
           
            y: 5,
            opacity:0,

            ease: Expo.easeInOut

          }
            
          )
         
 

.from($('.home-page.text-slide-1'),0.6,
          {
            y:-50,
            rotateX:90,
            opacity:0,
            ease: Expo.easeInOut
             }
           
            )
.from($('.home-page.character'),1,
          {
            y:50,
            rotateX:90,
            opacity:0,
            ease: Expo.easeInOut,
           rotateY:0, 
           translateZ:100,
             }
           
            )
.from($('.home-page.text-slide-3'),1,
          {
            y:50,
            rotateX:90,
            opacity:0,
            ease: Expo.easeInOut,
           rotateY:0, 
           translateZ:100,
             }
           
            )
        
    
         .staggerFrom($('.home-page.button-slide'),2,
          {
            y:200,
            opacity:0,
            ease: Expo.easeInOut
            
          })
         
    
        $('.kichhoat').click(function(event) {       
            hieuungnoidung.play();
         });
    
        function noidungvaodi()
        {
            hieuungnoidung.play();
        }
   
      
    })





$(function(){
        
        hieuungchuyentrang = new TimelineMax({onComplete:noidungchuyentrangvaodi}); 
        hieuungchuyentrang

        .from($('.loading-chuyentrang'),
          0.4,{
            opacity: 1,
            display:'none',
            /*ease:Expo.ScaleEase*/
             ease: Expo.easeInOut
          })
        
         .from($('.logo-chuyentrang'),0.6,
          {
            x:200,  
            opacity:0,
            display:'none',
            ease: Expo.easeInOut
          })
    
       
    
    
    
     .to($('.logo-chuyentrang'),0.8,
        {
          
          x:-200,
          opacity:0,
          display:'none',
           ease: Expo.easeInOut
        })

        .to($('.loading-chuyentrang'),0.6,
        {
          
          x:-2000,
          
          display:'none',
           ease: Expo.easeInOut
        })

      
    
    
    
    
    
    
    
         hieuungnoidungchuyentrang = new TimelineMax({paused:true}); 
    
         hieuungnoidungchuyentrang
         
         .from($('.text-slide-1'),0.8,
          {
            y:-50,
            rotateX:90,
            opacity:1,
            ease: Expo.easeInOut
             }
           
            )
.from($('.character'),0.8,
          {
            y:50,
            rotateX:90,
            opacity:1,
            ease: Expo.easeInOut,
           rotateY:0, 
           translateZ:100,
             }
           
            )

        
    
         .staggerFrom($('.button-slide, .text-slide-3'),1.5,
          {
            y:200,
            opacity:0,
            ease: Expo.easeInOut
            
          })
         
 

    
        
    
        function noidungchuyentrangvaodi()
        {
            hieuungnoidungchuyentrang.play();
        }
   
      
    })






  
 
   function animateFrom(elem, direction) {
  direction = direction | 1;
  
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = 0;
    y = 20;
    skewY:-50;

  } else if(elem.classList.contains("gs_reveal_fromRight")) {
    x = 0;
    y = -20;
    skewY:50;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 2, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg","perspective"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -800);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 1, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center left", force3D: true});


// randomize array elements using the Durstenfeld shuffle algorithm.
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}





/*// Wrap every letter in a span
var textWrapper = document.querySelector('.title-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  })

  .add({
    targets: '.letter',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });*/
/*var textWrapper = document.querySelector('.title-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
document.addEventListener('DOMContentLoaded', () => {
  // Creating waypoint
  let waypoint = new Waypoint({
    element: document.querySelector('.title-1'),
    handler: function() {
      anime({
          targets: '.letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
      })


      this.destroy();
    },
    context: document.querySelector('.title-1'),
    offset: '100%',
  })*/
/*})*/




gsap.registerPlugin(ScrollTrigger);
var textWrapper = document.querySelector('.title-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");






gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});
gsap.to(".letter", {
  scrollTrigger: ".section-about-us .letter", 
  duration: 2, 
  delay:0.4,
  rotation:360,

  
});




  