window.onload = function(){

    // input step
    const quantityInput1 = document.querySelector("#quantity1");
    const decreaseButton1 = document.querySelector("#decrease1");
    const increaseButton1 = document.querySelector("#increase1");

    const quantityInput2 = document.querySelector("#quantity2");
    const decreaseButton2 = document.querySelector("#decrease2");
    const increaseButton2 = document.querySelector("#increase2");

    const quantityInput3 = document.querySelector("#quantity3");
    const decreaseButton3 = document.querySelector("#decrease3");
    const increaseButton3 = document.querySelector("#increase3");

    decreaseButton1.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityInput1.value);
    if (currentQuantity > 1) {
        quantityInput1.value = currentQuantity - 1;
        // aa = currentQuantity;
    }
    });
    
    increaseButton1.addEventListener("click", () => {
        let currentQuantity = parseInt(quantityInput1.value);
        quantityInput1.value = currentQuantity + 1;
        // aa  = currentQuantity;
      });

    decreaseButton2.addEventListener("click", () => {
        let currentQuantity = parseInt(quantityInput2.value);
        if (currentQuantity > 1) {
            quantityInput2.value = currentQuantity - 1;
            // aa = currentQuantity;
        }
    });

    increaseButton2.addEventListener("click", () => {
        let currentQuantity = parseInt(quantityInput2.value);
        if  (currentQuantity > 1) {
            quantityInput2.value = currentQuantity + 1;
            // aa  = currentQuantity;
        }
    });

    decreaseButton3.addEventListener("click", () => {
        let currentQuantity = parseInt(quantityInput3.value);
        if (currentQuantity > 1) {
            quantityInput3.value = currentQuantity - 1;
            // aa = currentQuantity;
        }
    });

    increaseButton3.addEventListener("click", () => {
        let currentQuantity = parseInt(quantityInput3.value);
        if  (currentQuantity > 1) {
            quantityInput3.value = currentQuantity + 1;
            // aa  = currentQuantity;
        }
    });
      

   
}