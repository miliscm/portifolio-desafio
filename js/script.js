const botoes = document.querySelectorAll('.btn');
const experienceList = document.querySelectorAll('.experience-content');
const menuMobile = document.querySelector('.menu');
const navMobile = document.querySelector(".nav-pages-mobile")
const profileTop= document.querySelector(".profile-about").offsetTop;
let actualActiveButton;

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
   if((profileTop-300)<windowTop){    
    document.querySelector(".profile-about").classList.add("slide-in-left")
   }
}

menuMobile.addEventListener('click', () =>{
    menuMobileToggle();
})

botoes.forEach((botao, index) =>{   
    console.log('ok')
    botao.addEventListener("click", ()=>{
        let indexList = index;
        let currentActiveButton = document.getElementsByClassName('btn active')
        let currentActiveExperience = document.getElementsByClassName('experience-content active')
        actualActiveButton = botao;

        removeActive(currentActiveButton[0]);
        activeButton(actualActiveButton);
        console.log(currentActiveExperience[0], experienceList[indexList])
         removeActive(currentActiveExperience[0])
         activeButton(experienceList[indexList]);
                              
})
})
window.addEventListener("scroll", () => {
    animationClass(window.scrollY);
    
})