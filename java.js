 let tl = gsap.timeline({scrollTrigger: {
   trigger:"#two",
   start:"0% 95%",
   end:"50% 50%",
   scrub: true,
  
}});

tl.to("#fanta",{
   top:"112%",
   left:"10%",
},"one")

tl.to("#orange-cut",{
   top:"155%",
   left:"26%",
},"one")

tl.to("#leaf1",{
   top:"108%",
   left:"80%",
   transform:"rotate(150deg)",
},"one")

tl.to("#leaf2",{
   top:"104%",
   left:"0%",
   transform:"rotate(-30deg)",
},"one")

tl.to("#orange",{
   top:"170%",
   left:"80%",
},"one")

let tl2 = gsap.timeline({scrollTrigger: {
   trigger:"#three",
   start:"0% 95%",
   end:"70% 50%",
   scrub: true,
}});

tl2.from("#sprite",{
   left:"-10%",
   top:"-10%",
},"two")

tl2.from("#lemon",{
   left:"-10%",
   top:"-10%",
},"two")

tl2.from("#cocacola",{
   left:"-10%",
   top:"-10%",
},"two")

tl2.from("#orange2",{
   left:"-10%",
   top:"-10%",
},"two")


tl2.to("#orange-cut",{
   left:"42%",
   width:"17%",
   top:"207%",
},"two")

tl2.to("#fanta",{
   left:"35%",
   top:"215%",
},"two")




// ✅ MOBILE ke liye animation (max-width: 799px)
gsap.matchMedia().add("(max-width: 600px)", () => {
  let tlMobile = gsap.timeline({
    scrollTrigger: {
      trigger: "#two",
      start: "0% 95%",
      end: "50% 50%",
      scrub: true,
    },
  });

  tlMobile.to("#fanta", {
    top: "115%", 
    left: "0",
    scale: 0.9  // 👈 Image chhoti ho gayi
  }, "one");

  tlMobile.to("#orange-cut", {
    top: "134%", 
    left: "25%",
    scale: 0.8
  }, "one");

  tlMobile.to("#leaf1", {
    top: "112%",
    left: "55%",
    rotate: 150,
    scale: 0.9
  }, "one");

  tlMobile.to("#leaf2", {
    top: "100%",
    left: "0",
    rotate: -20,
    scale: 0.8
  }, "one");

  tlMobile.to("#orange", {
  
    top: "175%",
    left: "60%",
    scale: 1.1
  }, "one");
});

// ✅ MOBILE ke liye #three section ka animation
gsap.matchMedia().add("(max-width: 799px)", () => {
  let tl3Mobile = gsap.timeline({
    scrollTrigger: {
      trigger: "#three",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
    }
  });

  // Orange-cut & Fanta bottle ka movement and resize
  tl3Mobile.to("#orange-cut", {
    left: "37%",
    width: "29%",
    top: "212%",
    scale: 0.8
  }, "two");

  tl3Mobile.to("#fanta", {
    left: "25%",
    top: "216%",
    scale: 0.8
  }, "two");
});