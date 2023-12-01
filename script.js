window.onload = function(){

    // input step

    const all_increaseButton = document.querySelectorAll('.plus')
    const all_decreaseButton = document.querySelectorAll('.minus')


    for (let index = 0; index < all_increaseButton.length; index++) {
        const button = all_increaseButton[index];
        const data_id = button.getAttribute('data-id')
        const quantityInput = document.querySelector(`input[data-id="${data_id}"]`)

        button.addEventListener('click',()=>{
            let currentQuantity = parseInt(quantityInput.value);
            quantityInput.value = currentQuantity + 1;

          })
    }


    for (let index = 0; index < all_decreaseButton.length; index++) {
        const button = all_decreaseButton[index];
        const data_id = button.getAttribute('data-id')
        const quantityInput = document.querySelector(`input[data-id="${data_id}"]`)

        button.addEventListener('click',()=>{
            console.log('decreaseButton3');
                let currentQuantity = parseInt(quantityInput.value);
            console.log('decreaseButton3');

                if (currentQuantity > 1) {
                    quantityInput.value = currentQuantity - 1;
                }
          })
    }

    // Delet pop

    $(function(){

        $('.cartDelet').click(function(){
          $('.cartMask').css({'display':'block',});
        })
        $('.cartPopclose').click(function(){
          $('.cartMask').removeAttr('style');
        })
        $('.cartMask').click(function(){
          $(this).removeAttr('style');
        })

        $('.Deletbtn2').click(function(){
            $('.cartDeletpopup').css({'display':'none',});
            $('.DeletPod').css({'display':'none',});
            $('.cardStyle1').css({'grid-row':'1/5',});
            $('.cardStyle2').css({'grid-row':'5/5',});
            $('.cartSave').css({'z-index':'9999',});
        })

        // $('.cartDeletpopup').click(function(e){
        //   e.stopPropagation();
        // })
        // 問老師，如何刪除縮排
        // $('.Deletbtn2').click(function(e){
        //     $('.DeletPod').css({'display':'none',});
        //     $('.cardStyle1').css({'grid-row':'1/5',});
        //     $('.cardStyle2').css({'grid-row':'5/5',});

        //     $('.cartSave').css({'display':'block',});
        //     $('.cartMask').css({'display':'block',});
        //     $('.cartDeletpopup').css({'display':'none',});

        // })

        // $('.cartSave').click(function(e){
        //     e.stopPropagation();
        // })

        // 加入票券
        $('.cartCoupon').click(function(){
            $('.cartMask2').css({'display':'block',});
        })
        $('.cartPopclose').click(function(){
            $('.cartMask2').removeAttr('style');
        })
        $('.Savebtn1').click(function(){
            $('.cartMask2').removeAttr('style');
        })
        $('.cartMask2').click(function(){
            $(this).removeAttr('style');
        })
        $('.cartCouponspop').click(function(e){
            e.stopPropagation();
        })

    })
}