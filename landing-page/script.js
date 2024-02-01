document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        x:dets.x,
        y:dets.y,
        duration:.5
    })
})
    





let tl = gsap.timeline()

tl.from("#nav h3",{
    y:-50,
    duration:1,
    delay:.3,
    opacity:0,
    stagger: 0.1
})
tl.from("#hero img",{
    x:20,
    rotate:45,
    opacity:0,
    duration:1,
    stagger:0.5

})

tl.from("#hero h1",{
    y:30,
    opacity:0,
    duration:1,
    stagger:0.2
})
tl.to("#img1",{
    rotate:10,
    duration:.5
})
tl.to('#img2',{
    rotate:5,
    duration:.5,
    delay: -.5
})
tl.from('#hero-last h3',{
    y:10,
    opacity:0,
    duration:1
})
