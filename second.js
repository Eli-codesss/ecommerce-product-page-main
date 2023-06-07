/* let variableName = document.querySelector(".classname") */
/* let variableName = document.getElementById("idName") */

const dropdown = document.querySelector("#dropdown");
let cartBox = document.querySelector("#price-content");
let total = document.querySelector("#totalPrice");
const line2 = document.querySelector("#line2");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const price = document.getElementById("dollar1");
const menuBtn = document.getElementById("menu");
const menuContents = document.getElementById("menu-contents");
const deleteCart = document.getElementById("deleteCart");
const menuClose = document.getElementById("menu-close"); 
const previousBtn1 = document.getElementById("prev1");
const previousBtn2 = document.getElementById("prev2");
const previousBtn3 = document.getElementById("prev3");
const previousBtn4 = document.getElementById("prev4");
const slide = document.getElementById("images");
const cartIcon = document.querySelector(".cartmenu");
const checkout = document.querySelector(".checkout-btn");
const mainBody = document.querySelector(".mainbody")



let count =  Number(box2.value);
let totalPrice = 0;

    box3.addEventListener("click", function(){
        count = Number(box2.value) + 1;
        box2.value = count;
    });

    box1.addEventListener("click", function(){
       
        count = Number(box2.value) - 1;
        if(Number(box2.value) === 0) {
            count = 0;
        }
        box2.value = count;
    });

    box4.addEventListener("click", function(){

        totalPrice = box2.value * Number(price.innerText);
        cartBox.innerText =  `$${price.innerText} x ${box2.value}`;
        total.innerText = `$${totalPrice.toFixed(2)}`;
        dropdown.style.display = "block";

    });


     cartIcon.addEventListener("click", function(){
         dropdown.style.display = "block"
     });

     checkout.addEventListener("click", function(){
         dropdown.style.display = "none"
         box2.value = 0;
     })

     menuBtn.addEventListener("touchstart", function(){
         menuContents.style.display = "block"
     })
     
     menuClose.addEventListener("touchstart", function(){
         menuContents.style.display = "none"
     })

    // if(totalPrice === 0){
    //     dropdown.innerText = "You have no items in your cart"
    // }

