$(".burger").click(function(){
    $(this).find(".burgerContainer").toggleClass("active");
    $(this).siblings(".burger").find(".burgerContainer").removeClass("active");
});