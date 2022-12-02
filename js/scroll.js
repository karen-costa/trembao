const scrollanima = document.querySelector('[data-anima="scrool"]');
const metadewindow = window.innerHeight * 2.0;

console.log(innerHeight)
function animarScroll(){
 const topoItem = scrollanima.getBoundingClientRect().top;
 const itemvisivel = topoItem-metadewindow < 0;
 
 if(itemvisivel){
    scrollanima.classList.add('show-button');
 }else{
    scrollanima.classList.remove('show-button');
 }
}



window.addEventListener('scroll', animarScroll);