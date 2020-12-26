const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

tl.to("nav", { y: "50%", duration: 1.5 });
tl.fromTo("nav", { opacity:0 }, { opacity: 1, duration: 1 }, "-=1.5");

tl.fromTo(".part-1", { y:50 }, { y: 0, duration: 1, ease: "power3.inOut"}, "-=1");
tl.fromTo(".part-1", { opacity:0 }, { opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }, "-=1");

tl.fromTo(".part-2", { y:50 }, { y: 0, duration: 1, ease: "power3.inOut"}, "-=1");
tl.fromTo(".part-2", { opacity:0 }, { opacity: 1, duration: 1, delay: 0.5}, "-=1");
tl.fromTo(".part-4", { y:50 }, { y: 0, duration: 1, ease: "power3.inOut"}, "-=1");
tl.fromTo(".part-4", { opacity:0 }, { opacity: 1, duration: 1, delay: 0.5}, "-=1");



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

    document.querySelector(".hiden").style.opacity='1';
    document.querySelector("#inside-box-2").style.opacity='0';
   

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








//SEC2//////////////////////////////
let animA=document.querySelector("#boxA");
let animB=document.querySelector("#boxB");
let animC=document.querySelector("#boxC");

animA.onmouseover=function(){
    document.querySelector(".TitleF").style.opacity='1';
    document.querySelector(".TitleF").style.transition='0.25s ease-in-out';
    document.querySelector(".prixA1").style.opacity='1';
    document.querySelector(".prixA1").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenA").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenA").style.transitionDelay='0.25s ';
    document.querySelector(".prixA").style.transitionDelay='0.25s ';
    document.querySelector(".TitleA1").style.transitionDelay='0.25s ';
    document.querySelector(".hidenA").classList.add(".animation-1");
   
    document.querySelector(".hidenA").style.opacity='1';
    document.querySelector("#inside-box-B").style.opacity='0';
  
    document.querySelector("#inside-box-B").style.transition='0.25s ease';
    document.querySelector('#boxA').style.clipPath ="polygon(0 10%, 100% 0, 100% 100%, 0 90%)";


}
animA.onmouseout=function(){
   document.querySelector(".TitleF").style.opacity='0';
   document.querySelector(".prixA1").style.opacity='0';
   document.querySelector(".hidenA").style.opacity='0';
   document.querySelector("#inside-box-B").style.opacity='1';
   document.querySelector("#inside-box-B").style.transition='1s ease-in-out';
   document.querySelector(".boxS").style.boxShadow='none';
   document.querySelector(".hidenA").style.transition='0.25s ease';

   document.querySelector('#boxA').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0% 100%)";

}



animB.onmouseover=function(){
    document.querySelector(".TitleA2").style.opacity='1';
    document.querySelector(".TitleA2").style.transition='0.25s ease-in-out';
    document.querySelector(".prixA2").style.opacity='1';
    document.querySelector(".prixA2").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenA1").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenA1").style.transitionDelay='0.25s ';
    document.querySelector(".hidenA1").style.opacity='1'; 
    document.querySelector(".prixA").style.transitionDelay='0.25s ';
    document.querySelector(".TitleA2").style.transitionDelay='0.25s '; 



    document.querySelector(".hoverrA").style.opacity='0';
    document.querySelector(".hoverrA").style.transition='0.25s ease';
    document.querySelector('#boxA').style.clipPath ="polygon(0 16%, 100% 0, 100% 86%, 0 100%)";
    document.querySelector('#boxB').style.clipPath ="polygon(0 0, 100% 16%, 100% 100%, 0 86%)";
    document.querySelector('#boxC').style.clipPath ="polygon(0 16%, 100% 0, 100% 86%, 0 100%)";
   
}
animB.onmouseout=function(){
    document.querySelector(".TitleA2").style.opacity='0';
    document.querySelector(".prixA2").style.opacity='0';
    document.querySelector(".hidenA1").style.opacity='0'; 
    document.querySelector(".hidenA1").style.transition='0.25s ease-in-out';
    document.querySelector(".hoverrA").style.transition='0.5s ease-in-out';

    document.querySelector(".hoverrA").style.opacity='1';

    document.querySelector('#boxA').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector(".boxS").style.boxShadow='none';
    document.querySelector('#boxB').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector('#boxC').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector("#boxA").style.boxShadow='none';
    document.querySelector("#boxB").style.boxShadow='none';
    document.querySelector("#boxC").style.boxShadow='none';

 }


 animC.onmouseover=function(){
    document.querySelector(".TitleA3").style.opacity='1';
    document.querySelector(".TitleA3").style.transition='0.25s ease-in-out';
    document.querySelector(".prixA3").style.opacity='1';
    document.querySelector(".prixA3").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenA3").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenA3").style.transitionDelay='0.25s ';
    document.querySelector(".hidenA3").style.opacity='1'; 
    document.querySelector(".prixA3").style.transitionDelay='0.25s ';
    document.querySelector(".TitleA3").style.transitionDelay='0.25s '; 
    document.querySelector(".hoverrA2").style.opacity='0';
    document.querySelector(".hoverrA2").style.transition='0.25s ease';

    document.querySelector('#boxC').style.clipPath ="polygon(0 0, 100% 10%, 100% 90%, 0 100%)";
   


}
animC.onmouseout=function(){
    document.querySelector(".TitleA3").style.opacity='0';
   document.querySelector(".prixA3").style.opacity='0';
   document.querySelector(".hidenA3").style.opacity='0';
   document.querySelector(".hoverrA2").style.opacity='1';
   document.querySelector(".hoverrA2").style.transition='0.5s ease-in-out';
   document.querySelector(".boxS").style.boxShadow='none';
   document.querySelector(".hidenA").style.transition='0s ease';

    document.querySelector('#boxC').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector("#boxC").style.boxShadow='none';


 }
//////////sec3/////////
let animD=document.querySelector("#boxA1");
let animE=document.querySelector("#boxB1");
let animF=document.querySelector("#boxC1");

animD.onmouseover=function(){
    document.querySelector(".TitleS").style.opacity='1';
    document.querySelector(".TitleS").style.transition='0.25s ease-in-out';
    document.querySelector(".prixB1").style.opacity='1';
    document.querySelector(".prixB1").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenB").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenB").style.transitionDelay='0.25s ';
    document.querySelector(".prixB").style.transitionDelay='0.25s ';
    document.querySelector(".TitleB1").style.transitionDelay='0.25s ';
    document.querySelector(".hidenB").classList.add(".animation-1");
   
    document.querySelector(".hidenB").style.opacity='1';
    document.querySelector("#inside-box-B1").style.opacity='0';
  
    document.querySelector("#inside-box-B1").style.transition='0.25s ease';
    document.querySelector('#boxA1').style.clipPath ="polygon(0 10%, 100% 0, 100% 100%, 0 90%)";


}
animD.onmouseout=function(){
   document.querySelector(".TitleS").style.opacity='0';
   document.querySelector(".prixB1").style.opacity='0';
   document.querySelector(".hidenB").style.opacity='0';
   document.querySelector("#inside-box-B1").style.opacity='1';
   document.querySelector("#inside-box-B1").style.transition='1s ease-in-out';
   document.querySelector(".boxT").style.boxShadow='none';
   document.querySelector(".hidenB").style.transition='0.25s ease';

   document.querySelector('#boxA1').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0% 100%)";

}



animE.onmouseover=function(){
    document.querySelector(".TitleB2").style.opacity='1';
    document.querySelector(".TitleB2").style.transition='0.25s ease-in-out';
    document.querySelector(".prixB2").style.opacity='1';
    document.querySelector(".prixB2").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenB1").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenB1").style.transitionDelay='0.25s ';
    document.querySelector(".hidenB1").style.opacity='1'; 
    document.querySelector(".prixB").style.transitionDelay='0.25s ';
    document.querySelector(".TitleB2").style.transitionDelay='0.25s '; 



    document.querySelector(".hoverrB").style.opacity='0';
    document.querySelector(".hoverrB").style.transition='0.25s ease';
    document.querySelector('#boxA1').style.clipPath ="polygon(0 16%, 100% 0, 100% 86%, 0 100%)";
    document.querySelector('#boxB1').style.clipPath ="polygon(0 0, 100% 16%, 100% 100%, 0 86%)";
    document.querySelector('#boxC1').style.clipPath ="polygon(0 16%, 100% 0, 100% 86%, 0 100%)";
   
}
animE.onmouseout=function(){
    document.querySelector(".TitleB2").style.opacity='0';
    document.querySelector(".prixB2").style.opacity='0';
    document.querySelector(".hidenB1").style.opacity='0'; 
    document.querySelector(".hidenB1").style.transition='0.25s ease-in-out';
    document.querySelector(".hoverrB").style.transition='0.5s ease-in-out';

    document.querySelector(".hoverrB").style.opacity='1';

    document.querySelector('#boxA1').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector(".boxT").style.boxShadow='none';
    document.querySelector('#boxB1').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector('#boxC1').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector("#boxA1").style.boxShadow='none';
    document.querySelector("#boxB1").style.boxShadow='none';
    document.querySelector("#boxC1").style.boxShadow='none';

 }


 animF.onmouseover=function(){
    document.querySelector(".TitleB3").style.opacity='1';
    document.querySelector(".TitleB3").style.transition='0.25s ease-in-out';
    document.querySelector(".prixB3").style.opacity='1';
    document.querySelector(".prixB3").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenB3").style.transition='0.25s ease-in-out';
    document.querySelector(".hidenB3").style.transitionDelay='0.25s ';
    document.querySelector(".hidenB3").style.opacity='1'; 
    document.querySelector(".prixB3").style.transitionDelay='0.25s ';
    document.querySelector(".TitleB3").style.transitionDelay='0.25s '; 
    document.querySelector(".hoverrB2").style.opacity='0';
    document.querySelector(".hoverrB2").style.transition='0.25s ease';

    document.querySelector('#boxC1').style.clipPath ="polygon(0 0, 100% 10%, 100% 90%, 0 100%)";
   


}
animF.onmouseout=function(){
    document.querySelector(".TitleB3").style.opacity='0';
   document.querySelector(".prixB3").style.opacity='0';
   document.querySelector(".hidenB3").style.opacity='0';
   document.querySelector(".hoverrB2").style.opacity='1';
   document.querySelector(".hoverrB2").style.transition='0.5s ease-in-out';
   document.querySelector(".boxT").style.boxShadow='none';
   document.querySelector(".hidenB").style.transition='0s ease';

    document.querySelector('#boxC1').style.clipPath ="polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    document.querySelector("#boxC1").style.boxShadow='none';


 }