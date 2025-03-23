let tl = gsap.timeline({ repeat: -1, yoyo: false });

tl.to(".slider-container", { 
    x: "-200vw", 
    duration: 2, 
    ease: "power2.inOut", 
    delay: 1 
})
.to(".slider-container", { 
    x: "-100vw", 
    duration: 2, 
    ease: "power2.inOut", 
    delay: 1 
})
.to(".slider-container", { 
    x: "0vw", 
    duration: 2, 
    ease: "power2.inOut", 
    delay: 1 
});