$(document).ready(function(){
  $(".decrease_cart_item").on("click", function(){
      // console.log($(this).next()[0].value)
    if($(this).next()[0].value > 1){
      $(this).next()[0].value--  
    }
  });

  $(".increase_cart_item").on("click", function(){
    if($(this).prev()[0].value < 1){
      $(this).prev()[0].value = 1  
    } else {
      $(this).prev()[0].value++
    }
  });  
});



// function decreaseValue(){
//   if($(this).next()[0].value > 1){
//     $(this).next()[0].value--  
//   }
// }

// function increaseValue(){
//   if($(this).prev()[0].value < 1){
//     $(this).prev()[0].value = 1  
//   } else {
//     $(this).prev()[0].value++
//   }
// }