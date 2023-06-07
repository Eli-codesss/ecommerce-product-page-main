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
const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const product4 = document.getElementById("product4");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");
const previousBtn1 = document.getElementById("prev1");
const previousBtn2 = document.getElementById("prev2");
const previousBtn3 = document.getElementById("prev3");
const previousBtn4 = document.getElementById("prev4");
const nextBtn1 = document.getElementById("nxt1");
const nextBtn2 = document.getElementById("nxt2");
const nextBtn3 = document.getElementById("nxt3");
const nextBtn4 = document.getElementById("nxt4");
const slide = document.getElementById("images");
const cartIcon = document.querySelector(".cartmenu");
const checkout = document.querySelector(".checkout-btn");
const mainBody = document.querySelector(".mainbody")



let count =  Number(box2.value);
let totalPrice = 0;
let counter = 0;

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
     });

     menuBtn.addEventListener("touchstart", function(){
         menuContents.style.display = "block"
     });
     
     menuClose.addEventListener("touchstart", function(){
         menuContents.style.display = "none"
     });

     previousBtn1.addEventListener("touchstart", function(){
        counter -= 1
        if(counter<0){
            counter = 0;
        }
     });

     nextBtn1.addEventListener("touchstart", function(){
        counter += 1
        if(counter>3){
            counter = 0;
        }
     });

     do{
        product2.style.zIndex = "20"
     }while(counter===1);

