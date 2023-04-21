jQuery(window).on("load", function(){
    console.log("hi");
    $('#formpage').hide();

    $('.Start_btn').on("click",function(){ 
        $('#signUp').addClass('hid-box');
        $('#formpage').show();
        $('#homepage').hide();
        

    });

});