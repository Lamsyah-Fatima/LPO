const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.to("nav", { y: "50%", duration: 1.5 });
tl.fromTo("nav", { opacity:0 }, { opacity: 1, duration: 1 }, "-=1.5");

// tl.to(".hide", {x: "-100%", duration:1.5, ease: "power3.inOut" },'-=1');
// tl.to(".big-text", { x: "0%", duration: 1 }, "-=1");
tl.fromTo(".part-1", { y:50 }, { y: 0, duration: 1, ease: "power3.inOut"}, "-=1");
tl.fromTo(".part-1", { opacity:0 }, { opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }, "-=1");

tl.fromTo(".part-2", { y:50 }, { y: 0, duration: 1, ease: "power3.inOut"}, "-=1");
tl.fromTo(".part-2", { opacity:0 }, { opacity: 1, duration: 1, delay: 0.5}, "-=1");
tl.fromTo(".part-4", { y:50 }, { y: 0, duration: 1, ease: "power3.inOut"}, "-=1");
tl.fromTo(".part-4", { opacity:0 }, { opacity: 1, duration: 1, delay: 0.5}, "-=1");


// function show1(){
 
//     tl.fromTo("#inside-box-2", { opacity:1 }, { opacity: 0, duration: 1, ease: "power3.out" });
//     tl.fromTo(".Title", { y:50 }, { y: 0, duration: 1, ease: "power3.inOut"}, "-=1");
//     tl.fromTo(".Title", { opacity:0 }, { opacity: 1, duration: 1}, "-=0.5");
// }
// function hide1(){
//     tl.fromTo("#inside-box-2", { opacity:0 }, { opacity: 1, duration: 1, ease: "power3.out"});
//     tl.fromTo(".Title", { opacity:1 }, { opacity: 0, duration: 1}, "-=0.5");
  
// }
let anim=document.querySelector("#box-1");
let anim1=document.querySelector("#box-2");
let anim2=document.querySelector("#box-3");
anim.onmouseover=function(){
    document.querySelector(".Title").style.opacity='1';
    document.querySelector(".Title").style.transition='0.25s ease-in-out';
    document.querySelector(".prix1").style.opacity='1';
    document.querySelector(".prix1").style.transition='0.25s ease-in-out';
    document.querySelector(".hiden").style.transition='0.25s ease-in-out';
    document.querySelector(".hiden").style.transitionDelay='0.25s ';
    document.querySelector(".prix").style.transitionDelay='0.25s ';
    document.querySelector(".Title1").style.transitionDelay='0.25s ';
    document.querySelector(".hiden").classList.add(".animation-1");
    // tl.fromTo(".Title1", { opacity:0 }, { opacity: 1, duration: 0.5, ease: "power3.inOut"});
    // tl.fromTo(".Title1", { y:50 }, { y: 0, duration: 1, ease: "power3.inOut"}, "-=1");
    // tl.fromTo(".prix1", { opacity:0 }, { opacity: 1, duration: 0.5, ease: "power3.inOut"},"-=1.5");
    // tl.fromTo(".prix1", { y:-50 }, { y: 0, duration: 1, ease: "power3.inOut"}, "-=1");
    
    document.querySelector(".hiden").style.opacity='1';
    document.querySelector("#inside-box-2").style.opacity='0';
    // document.querySelector(".box").style.boxShadow='1px 2px 10px 3px rgba(2, 0, 0, 0.4) inset';
    
    document.querySelector("#inside-box-2").style.transition='0.25s ease';
    document.querySelector('#box-1').style.clipPath ="polygon(0 10%, 100% 0, 100% 100%, 0 90%)";


}
anim.onmouseout=function(){
   document.querySelector(".Title").style.opacity='0';
   document.querySelector(".prix1").style.opacity='0';
   document.querySelector(".hiden").style.opacity='0';
   document.querySelector("#inside-box-2").style.opacity='1';
   document.querySelector("#inside-box-2").style.transition='1s ease-in-out';
   document.querySelector(".box").style.boxShadow='none';
   document.querySelector(".hiden").style.transition='0.25s ease';

   document.querySelector('#box-1').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
 
}
anim1.onmouseover=function(){
    document.querySelector(".Title2").style.opacity='1';
    document.querySelector(".Title2").style.transition='0.25s ease-in-out';
    document.querySelector(".prix2").style.opacity='1';
    document.querySelector(".prix2").style.transition='0.25s ease-in-out';
    document.querySelector(".hiden1").style.transition='0.25s ease-in-out';
    document.querySelector(".hiden1").style.transitionDelay='0.25s ';
    document.querySelector(".hiden1").style.opacity='1'; 
    document.querySelector(".prix").style.transitionDelay='0.25s ';
    document.querySelector(".Title2").style.transitionDelay='0.25s '; 
   
   
   
    document.querySelector(".hoverr").style.opacity='0';
    document.querySelector(".hoverr").style.transition='0.25s ease';
    document.querySelector('#box-1').style.clipPath ="polygon(0 16%, 100% 0, 100% 86%, 0 100%)";
    document.querySelector('#box-2').style.clipPath ="polygon(0 0, 100% 16%, 100% 100%, 0 86%)";
    document.querySelector('#box-3').style.clipPath ="polygon(0 16%, 100% 0, 100% 86%, 0 100%)";
    // document.querySelector("#box-1").style.boxShadow='1px 2px 10px 3px rgba(2, 0, 0, 0.4) inset';
    // document.querySelector("#box-2").style.boxShadow='1px 2px 10px 3px rgba(2, 0, 0, 0.4) inset';
    // document.querySelector("#box-3").style.boxShadow='1px 2px 10px 3px rgba(2, 0, 0, 0.4) inset';

}
anim1.onmouseout=function(){
    document.querySelector(".Title2").style.opacity='0';
    document.querySelector(".prix2").style.opacity='0';
    document.querySelector(".hiden1").style.opacity='0'; 
    document.querySelector(".hiden1").style.transition='0.25s ease-in-out';
    document.querySelector(".hoverr").style.transition='0.5s ease-in-out';
   
    document.querySelector(".hoverr").style.opacity='1';
    
    document.querySelector('#box-1').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector(".box").style.boxShadow='none';
    document.querySelector('#box-2').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector('#box-3').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector("#box-1").style.boxShadow='none';
    document.querySelector("#box-2").style.boxShadow='none';
    document.querySelector("#box-3").style.boxShadow='none';
  
 }
 anim2.onmouseover=function(){
    document.querySelector(".Title3").style.opacity='1';
    document.querySelector(".Title3").style.transition='0.25s ease-in-out';
    document.querySelector(".prix3").style.opacity='1';
    document.querySelector(".prix3").style.transition='0.25s ease-in-out';
    document.querySelector(".hiden3").style.transition='0.25s ease-in-out';
    document.querySelector(".hiden3").style.transitionDelay='0.25s ';
    document.querySelector(".hiden3").style.opacity='1'; 
    document.querySelector(".prix3").style.transitionDelay='0.25s ';
    document.querySelector(".Title3").style.transitionDelay='0.25s '; 
    document.querySelector(".hoverr2").style.opacity='0';
    document.querySelector(".hoverr2").style.transition='0.25s ease';

    document.querySelector('#box-3').style.clipPath ="polygon(0 0, 100% 10%, 100% 90%, 0 100%)";
    // document.querySelector("#box-3").style.boxShadow='1px 2px 10px 3px rgba(2, 0, 0, 0.4) inset';
  

}
anim2.onmouseout=function(){
    document.querySelector(".Title3").style.opacity='0';
   document.querySelector(".prix3").style.opacity='0';
   document.querySelector(".hiden3").style.opacity='0';
   document.querySelector(".hoverr2").style.opacity='1';
   document.querySelector(".hoverr2").style.transition='0.5s ease-in-out';
   document.querySelector(".box").style.boxShadow='none';
   document.querySelector(".hiden").style.transition='0s ease';

    document.querySelector('#box-3').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector("#box-3").style.boxShadow='none';
    
  
 }

