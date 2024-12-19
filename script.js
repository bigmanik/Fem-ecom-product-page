document.querySelector(".z1-btn").setAttribute("disabled", "disabled");

var valueCount
valueCount = document.getElementById("quad").value;



document.querySelector(".z2-btn").addEventListener("click", function(){

  valueCount++;
  document.getElementById("quad").value = valueCount
  if(valueCount >= 0){
    document.querySelector(".z1-btn").removeAttribute("disabled");
    document.querySelector(".z1-btn").classList.remove("disabled");
  }

});

document.querySelector(".z1-btn").addEventListener("click", function(){
valueCount--;
document.getElementById("quad").value = valueCount
if(valueCount == 0){
    document.querySelector(".z1-btn").setAttribute("disabled", "disabled");
   
}


});

var cc 
cc =  document.querySelector(".y-btn");
 cc.addEventListener("click", ()=> {
  
 })
const modal = document.querySelector( '.ks');
 const openModal = document.querySelector('#q-img1');
 const closeModal = document.querySelector('.cl');

 openModal.addEventListener('click', ()=>{
  modal.showModal();
 });
 closeModal.addEventListener('click', ()=>{
  modal.close();
 });


 const nxt = document.querySelector("#net");
 const prv = document.querySelector("#pre ");
 const bimg = document.querySelector(" .p-img");
 const  clist = document.querySelector(".ls-1");

 nxt.onclick = function()
 {showSlider('next')
 }
 prv.onclick = function()
 {showSlider('prev')
 }

 function showSlider(type) {
  if(type === 'next'){
     clist.appendChild(item[0])
     
  }
 }




 




