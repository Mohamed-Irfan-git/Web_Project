document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".nav-bar .title", { 
        x: -100, 
        opacity: 0, 
        duration: 1, 
        ease: "power2.out"
    });
});



document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".container .left h1", { 
        x: -100, 
        opacity: 0, 
        duration: 2, 
        ease: "power3.out"
    });
});


document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);


    gsap.utils.toArray(".property, .new").forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            y: 50, 
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play play play play",
            }
        });
    });
});


