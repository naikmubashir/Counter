const increaseBtn=document.querySelector('#increase');
const decreaseBtn=document.querySelector('#decrease');
const resetBtn=document.querySelector('#reset');
const count=document.querySelector('#count');

increaseBtn.addEventListener('click',()=>{
    count.textContent=parseInt(count.textContent)+1;
    if(parseInt(count.textContent)>0){
        count.style.color='#08D9D6';
    }
})
decreaseBtn.addEventListener('click',()=>{
    count.textContent=parseInt(count.textContent)-1;
   if(parseInt(count.textContent)<0){
       count.style.color='red';
   } 
})
resetBtn.addEventListener('click',()=>{
    count.textContent=0;
    count.style.color='white';
})