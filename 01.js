import "./01.scss"  // scss를 JS로 적용시키기

console.log("01-JS")

const btn = document.querySelector('.container2 .btn')
let toggle = false;

btn.addEventListener('click', () =>{
    
    if(toggle){
        btn.classList.add('active')
    }else{
        btn.classList.remove('active')
    }

    toggle = !toggle
})