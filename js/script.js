const botoes = document.querySelectorAll('.btn');
const experienceList = document.querySelectorAll('.experience-content');
const menuMobile = document.querySelector('.menu');
const navMobile = document.querySelector(".nav-pages-mobile")
const profileTop= document.querySelector(".profile-about");
const experienceTop = document.querySelector(".experience-history");
const projectTop = document.querySelectorAll(".project-content");


let actualActiveButton;
let arrTop = [profileTop,experienceTop,...projectTop];

function activeButton(i){
    i.classList.add('active')

}
function removeActive(a){
    a.classList.remove('active')
}
function menuMobileToggle(){
    navMobile.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active')
    
}
function animationClass(windowTop){
    arrTop.forEach((item)=>{
        if((item.offsetTop-500)<windowTop){    
            item.classList.add("slide-in-left");
           
           }
    })
   
}



botoes.forEach((botao, index) =>{   
    botao.addEventListener("click", ()=>{
        let indexList = index;
        let currentActiveButton = document.getElementsByClassName('btn active')
        let currentActiveExperience = document.getElementsByClassName('experience-content active')
        actualActiveButton = botao;

        removeActive(currentActiveButton[0]);
        activeButton(actualActiveButton);
        removeActive(currentActiveExperience[0])
        activeButton(experienceList[indexList]);
                              
})
})
menuMobile.addEventListener('click', () =>{
    menuMobileToggle();
})
window.addEventListener("scroll", () => {
    animationClass(window.scrollY);
    
})