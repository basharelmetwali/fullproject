let navbar=document.getElementsByTagName("nav")[0]




//tab  navbar
let navlinkstab=document.querySelectorAll(".navtab a")
let activetab=document.querySelectorAll(".tab")

//SAEPE FUGA
navlinkstab[0].onclick=function(){
   
    //disactive other tab links and tabs
navlinkstab[1].classList.remove("active")
activetab[1].classList.remove("activetab")

navlinkstab[2].classList.remove("active")
activetab[2].classList.remove("activetab")

setTimeout(function(){
//active tab link and tab
navlinkstab[0].classList.add("active")
activetab[0].classList.add("activetab")
},200)


}

//VOLUPTATES
navlinkstab[1].onclick=function(){
   
            //disactive other tab links and tabs
    navlinkstab[0].classList.remove("active")
    activetab[0].classList.remove("activetab")

    navlinkstab[2].classList.remove("active")
    activetab[2].classList.remove("activetab")
        
    setTimeout(function(){
    //active tab link and tab
    navlinkstab[1].classList.add("active")
    activetab[1].classList.add("activetab")
    },200)


}
//

navlinkstab[2].onclick=function(){
   
    //disactive other tab links and tabs
navlinkstab[0].classList.remove("active")
activetab[0].classList.remove("activetab")

navlinkstab[1].classList.remove("active")
activetab[1].classList.remove("activetab")

setTimeout(function(){
//active tab link and tab
navlinkstab[2].classList.add("active")
activetab[2].classList.add("activetab")
},200)


}

//increasing numbers
let numberinc=document.querySelectorAll(".increasenumber .num");
let sectionOfincreasingnumber=document.querySelector(".increasenumber")
let increased=false;

function increasingnumber(ele){
    let goal=ele.dataset.goal;
    let count=setInterval(function(){
        ele.textContent++;
  if(ele.textContent==goal){
    clearInterval(count)
  }
    },1600/goal)
}





/*animation of home*/
let homeimg=document.getElementsByClassName("imghome")[0];
let frombottom=document.getElementsByClassName("frombottom");
setTimeout(function(){
    homeimg.classList.remove("imghomeanimation")
    frombottom[0].classList.remove("frombottomanimationanimation")
    frombottom[1].classList.remove("frombottomanimationanimation")
    frombottom[2].classList.remove("frombottomanimationanimation")


},500)

let valuessection=document.getElementsByClassName("valuessection")[0];
let abouttext=document.getElementsByClassName("Aboutext")[0];
let aboutimg=document.getElementsByClassName("Aboutimg")[0];
let aboutsection=document.getElementsByClassName("About")[0];
let Servicessection =document.getElementsByClassName("services")[0];
//scroll body
console.log(frombottom)
document.body.onscroll=function(){

    if(scrollY>100){
        navbar.classList.add("bg-white");
        navbar.classList.add("shadow");
        document.querySelector(".scrollbutton").style.opacity=1
    }
    else if(scrollY<100){
        navbar.classList.remove("bg-white");
        navbar.classList.remove("shadow");    
        document.querySelector(".scrollbutton").style.opacity=0

    }
    if(scrollY>Servicessection.offsetTop){
                frombottom[4].classList.remove("frombottomanimationanimation");
                frombottom[5].classList.remove("frombottomanimationanimation");
                frombottom[6].classList.remove("frombottomanimationanimation");


    }



  



    if(window.scrollY>=sectionOfincreasingnumber.offsetTop-130){
       frombottom[3].classList.remove("frombottomanimationanimation")
        if(!increased){
            numberinc.forEach(ele=>{
                increasingnumber(ele)
            })
            increased=true;
        }
        }


}



//*protfolio
let swticherlist=document.querySelectorAll(".protfoliobuttons button");
let imagess=document.querySelectorAll(".protfolioimg");
swticherlist.forEach((btn)=>{
    btn.addEventListener("click",removeactive);
    btn.addEventListener("click",manageimages);
})
function removeactive(){
  swticherlist.forEach((btn) =>{
    btn.classList.remove("active");
  })
  this.classList.add("active");

}
function manageimages(){
    imagess.forEach((img)=>{
    img.style.display="none";
    })
    console.log(document.querySelectorAll(this.dataset.cat))
    document.querySelectorAll(this.dataset.cat).forEach((ele)=>{
        ele.style.display="block";
    })
}





//* nav bar
let buttonnav=document.querySelector("nav .navbar-toggler")
let mobilenav=document.querySelector("nav  .navbar-collapse")
let dropnav=document.querySelector(".dropnav")
let navlink=document.querySelectorAll(".linkb")
buttonnav.onclick=function(){
    setTimeout(() => {
   if(mobilenav.classList.contains("show")){
  dropnav.style.display="block";
  dropnav.style.opacity=0.8;
    
}
    }, 
    1000);

}
dropnav.onclick=function(){
    mobilenav.classList.remove("show");
    dropnav.style.display="none";
}
navlink.forEach((ele)=>{
    ele.onclick=function(){
        mobilenav.classList.remove("show");
        dropnav.style.display="none";
        console.log("Bashar")
    }
})




/* get start about on click*/
let getstartabout=document.querySelector(".get-start");
getstartabout.onclick=function(){
window.scrollTo(0,aboutsection.offsetTop-10)
mobilenav.classList.remove("show");
dropnav.style.display="none";
}



let dropdow=document.getElementsByClassName("dropdown")[0]
let dropdownlink=document.getElementsByClassName("dropdown-menu")[0];
dropdow.onmouseenter=function(){
    dropdownlink.classList.add("show");
}

dropdow.onmouseleave=function(){
    dropdownlink.classList.remove("show");
}