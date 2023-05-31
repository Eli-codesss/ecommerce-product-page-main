/* let variableName = document.querySelector(".classname") */
/* let variableName = document.getElementById("idName") */

const dropdown = document.querySelector("#dropdown")
let cartBox = document.querySelector("#price-content")
let total = document.querySelector("#totalPrice")
const line2 = document.querySelector("#line2")
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const price = document.getElementById("dollar1");
const deleteCart = document.getElementById("deleteCart");
const empty = " ";

let count =  Number(box2.innerText);
let totalPrice = 0;

    box3.addEventListener("click", function(){
        count = Number(box2.innerText) + 1;
        box2.innerText = count;
    });

    box1.addEventListener("click", function(){
       
        count = Number(box2.innerText) - 1;
        if(Number(box2.innerText) === 0) {
            count = 0;
        }
        box2.innerText = count;
    });

    box4.addEventListener("click", function(){

        totalPrice = count * Number(price.innerText)
        cartBox.innerText =  `$${price.innerText} x ${count}`;
        total.innerText = `$${totalPrice.toFixed(2)}`

    });

    deleteCart.addEventListener("click", function(){
        line2.innerText = empty;
        
    });

    // if(totalPrice === 0){
    //     dropdown.innerText = "You have no items in your cart"
    // }

