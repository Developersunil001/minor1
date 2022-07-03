function show() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
  
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  }
  show();




 document.querySelector(".menu").addEventListener("click",function(){
   document.querySelector(".overlaymenu").style.left="0"
 })

 document.querySelector(".return").addEventListener("click",function(){
   document.querySelector(".overlaymenu").style.left="-100%"
 })


  gsap.to("#e1",{
      
      rotate: 360,
      duration: 7,
      ease: Power0.easeNone, y: -624,
      repeat: -1,
  })
  gsap.to("#e2",{
      
      rotate: 800,
      duration: 7,
      repeat: -1,
      ease: Power0.easeNone, y: -624,
  })
  gsap.to("#e3",{
      
      rotate: 360,
      duration: 7,
      repeat: -1,
      ease: Power0.easeNone, y: -624,
  })
  gsap.to("#e4",{
      
      rotate: 360,
      duration: 7,
      repeat: -1,
      ease: Power0.easeNone, y: -624,
  })
  gsap.to("#e5",{
      
      rotate: 360,
      duration: 7,
      repeat: -1,
      ease: Power0.easeNone, y: -624,
  })
  gsap.to("#e6",{
      
      rotate: 360,
      duration: 7,
      repeat: -1,
      ease: Power0.easeNone, y: -624,
  })
  gsap.to("#e7",{
      
      rotate: 360,
      duration: 7,
      repeat: -1,
      ease: Power0.easeNone, y: -624,
  })
  gsap.to("#e8",{
      
      rotate: 360,
      duration: 7,
      repeat: -1,
      ease: Power0.easeNone, y: -624,
  })
  gsap.to("#e9",{
      
      rotate: 360,
      duration: 7,
      repeat: -1,
      ease: Power0.easeNone, y: -624,
  })
  gsap.to("#e10",{
      
      rotate: 360,
      duration: 7,
      repeat: -1,
      ease: Power0.easeNone, y: -624,
  })
  gsap.to("#e11",{
      
      rotate: 360,
      duration: 7,
      repeat: -1,
      ease: Power0.easeNone, y: -624,
  })


 

  gsap.from(".header>h1",{
    y: 10,
    duration: 1.5,
    opacity: 0,
    stagger:0.2,
   })

   gsap.from(".txtcontent>h1",{
     y: 10,
     duration: 1.5,
     opacity: 0,
     stagger: 0.2,
     delay: 0.7,
    })


 gsap.from(".paragraph>p",{
     y: 20,
     duration: 1,
     opacity: 0,

     scrollTrigger: {
        trigger: ".paragraph>p",
        scroller: ".main",
         
         scrub: true,
         start: "top 75%",
          
     }
     
 })
 
 gsap.from("#card1",{
    y: 20,
    duration: 1,
    rotateY: 0,
    rotateX: 50,
     
   
    opacity: 0,

    scrollTrigger: {
       trigger: "#card1",
       scroller: ".main",
      
        scrub: true,
        start: "top 55%",
        end:"top 40%"
         
        
    }
    
})

gsap.from("#card2",{
    y: 20,
    duration: 1,
    rotateY: 0,
    rotateX: 50,
    
   
    opacity: 0,

    scrollTrigger: {
       trigger: "#card2",
       scroller: ".main",
        
        scrub: true,
        start: "top 55%",
       end: "top 40%"
        
    }
    
})

gsap.from("#card3",{
    y: 20,
    duration: 1,
    rotateY: 0,
    rotateX: 50,
     
   
    opacity: 0,

    scrollTrigger: {
       trigger: "#card3",
       scroller: ".main",
        
        scrub: true,
        start: "top 55%",
       end: "top 40%"
        
    }
    
})


gsap.from("#card4",{
    y: 20,
    duration: 1,
    rotateY: 0,
    rotateX: 50,
     
   
    opacity: 0,

    scrollTrigger: {
       trigger: "#card4",
       scroller: ".main",
      
        scrub: true,
        start: "top 55%",
       end: "top 40%"
        
    }
    
})


var tl = gsap.timeline();

tl.from(".loader>h1",{
    y: 30,
    opacity:0,
    duration:1.2,
    

})
tl.to(".loader",{
    y: "-100%",
    duration: 0.5,
})

 
 