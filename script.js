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



const gotocartBtn = document.querySelector(".y-btn");
const cartBadge = document.querySelector(".cart-badge");
const quadInput = document.querySelector(".bquad");


let cartCount = 0;


// Handle add to cart
gotocartBtn.addEventListener('click', () => {
    if (valueCount === 0) return;
    
    cartCount += valueCount;
    cartBadge.textContent = cartCount;
    cartBadge.style.display = 'flex';
    
    // Reset quantity
    valueCount = 0;
    quadInput.value = valueCount;
});

var cc 
cc =  document.querySelector(".y-btn");
 cc.addEventListener("click", ()=> {
  
 })
const modal = document.querySelector( '.ks');
 const openModal = document.querySelector('#img1');
 const closeModal = document.querySelector('.cl');

 openModal.addEventListener('click', ()=>{
  modal.showModal();
 
 });
 closeModal.addEventListener('click', ()=>{
  modal.close();
 });




 const car = document.querySelector(".carr");
 const crDel = document.querySelector( ".cr-del");
 const hnd = document.querySelector(".mcar ");
 const vani = document.querySelector(".vani");
    


if (car && hnd) {
  car.addEventListener("click", () => {
    hnd.showModal(); // Open the modal
  });

  // Close the dialog when clicking outside of it
  document.addEventListener("click", (event) => {
    if (hnd.open && event.target === hnd) {
      hnd.close();
    }
  });
}


    crDel.addEventListener('click', function(){
   vani.remove();

   const message = document.createElement("div");
   message.textContent = "Your cart is empty";
   message.classList.add("cart-message");
   hnd.appendChild(message);
    });

    const hamburger = document.querySelector(".ham");
    const can = document.querySelector(".cansel");
    const mnav1 = document.querySelector(".mnav1");


    //open the hamburger nav bar 

  hamburger.addEventListener('click', ()=>{
    mnav1.style.display = "flex" ;
   
      
  });

  can.addEventListener('click', ()=>{
    mnav1.style.display = "none";
    // mnav1.remove()
    
  });



 //setting up the functional part of the carousel 

const bigimg = document.querySelector("#w-img");
const nxt = document.querySelector("#net");
const pre = document.querySelector("#pre");
const thumbnails = document.querySelectorAll(".v-img");  // Changed from litimg to thumbnails for clarity
      
let currentIndex = 0;
//function to update the main img

function updatebigimg(index){
  if (index < 0){
    index = thumbnails.length - 1;
  } else if(index >= thumbnails.length) {
    index = 0;
  }
  
  //update current index
  currentIndex = index;
  //update main image source
  const newSrc = thumbnails[currentIndex].src;
  bigimg.src = newSrc;  // Changed from updatebigimg.src to bigimg.src

  //highlight the active thumbnail
  thumbnails.forEach((thumb, i) =>{
    if(i === currentIndex) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');  // Fixed typo: classLis -> classList
    }
  });
}

//direction arrow 
if (pre){
  pre.addEventListener('click', function(){
    updatebigimg(currentIndex - 1);  // Fixed typo: currentIndexIndex -> currentIndex
  });
}

if (nxt){
  nxt.addEventListener('click', function(){
    updatebigimg(currentIndex + 1);  // Fixed typo: currentIndexIndex -> currentIndex
  });
}

//add eventlisteners to each thumbnail
thumbnails.forEach((thumbnail, index) =>{
  thumbnail.addEventListener('click', function(){
    updatebigimg(index);
  });
});

//setting the mobile aspect of the carousel 



document.addEventListener('DOMContentLoaded', function() {
  // Array of image URLs (you'll need to populate this with your actual image URLs)
  const imageUrls = [
    'assets/image-product-1-thumbnail.jpg',  // Replace with your actual image paths
    'assets/image-product-2-thumbnail.jpg',
    'assets/image-product-3-thumbnail.jpg',
    'assets/image-product-4-thumbnail.jpg'
    // Add more images as needed
  ];
  
  // Get the main image element
  const mainImage = document.querySelector('#mopo-img'); // Update selector based on your HTML
  
  // Get the navigation arrows
  const prevArrow = document.querySelector('#bpre'); // Update selector based on your HTML
  const nextArrow = document.querySelector('#bnet'); // Update selector based on your HTML
  
  let currentIndex = 0;
  
  // Function to update the main image
  function updateMainImage(index) {
    if (index < 0) {
      index = imageUrls.length - 1;
    } else if (index >= imageUrls.length) {
      index = 0;
    }
    
    // Update current index
    currentIndex = index;
    
    // Update main image source
    mainImage.src = imageUrls[currentIndex];
    
    // Optional: Add indicator dots to show position
    updateIndicators();
  }
  
 
  
  // Add click event listeners to arrows
  if (prevArrow) {
    prevArrow.addEventListener('click', function() {
      updateMainImage(currentIndex - 1);
    });
  }
  
  if (nextArrow) {
    nextArrow.addEventListener('click', function() {
      updateMainImage(currentIndex + 1);
    });
  }
  
  // Add swipe support for mobile (optional)
  let touchStartX = 0;
  let touchEndX = 0;
  
  mainImage.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  mainImage.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance to register a swipe
    
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left, go to next image
      updateMainImage(currentIndex + 1);
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right, go to previous image
      updateMainImage(currentIndex - 1);
    }
  }
  
  // Initialize indicators
  createIndicators();
  
  // Set initial image
  updateMainImage(0);
});

//adding functionality to the add to cart 

