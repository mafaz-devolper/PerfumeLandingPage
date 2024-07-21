var tl = gsap.timeline();

tl.from("#nav #left",{
   opacity:0,
   y:-20,
   duration:1,
   delay:1
})

tl.from("#nav #right",{
    opacity:0,
    y:-20,
    duration:1,

 })

tl.from("#content #left-part h2",{
    y:80, 
    opacity:0,
    duration:1,
    stagger:1,
    // rotate:10
})
tl.from("#content #left-part h3",{
    y:50, 
    opacity:0,
    duration:1,
    rotate:2
})
tl.from("#content #left-part p",{
    y:50, 
    opacity:0,
    duration:1
})
tl.from("#content #left-part h4",{
    y:50, 
    opacity:0,
    duration:1
})
tl.from("#content #left-part button",{
    y:50, 
    opacity:0,
    duration:1
})


tl.from("#content #right-part #box",{
    x:80, 
    opacity:0,
    duration:1
})

tl.from("#content #right-part p",{
    y:-80, 
    opacity:0,
    duration:1
})

tl.from("#content #right-part h6",{
    x:80, 
    opacity:0,
    duration:1
})
tl.from("#content #right-part #container",{
    x:-80, 
    opacity:0,
    duration:1
})

tl.from("#content #center",{
    y:80, 
    opacity:0,
    duration:3,
    delay:0.5
})