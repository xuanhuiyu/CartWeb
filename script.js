window.onload = function(){

    // input step
    const quantityInput = document.querySelector("#quantity");
    const decreaseButton = document.querySelector("#decrease");
    const increaseButton = document.querySelector("#increase");

    decreaseButton.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
        // aa = currentQuantity;
    }
    });
    
    increaseButton.addEventListener("click", () => {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
        // aa  = currentQuantity;
      });
   
}