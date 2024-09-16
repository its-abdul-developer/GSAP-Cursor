let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let imgDiv = document.querySelector("#img")
let h4 = document.querySelector("#cursor h4");

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.3,
        ease:"elastic-out",

    })

})

imgDiv.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"rgba(126, 126, 235, 0.363)",
    })
})
imgDiv.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff",

    })
})
