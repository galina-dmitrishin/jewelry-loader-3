document.body.onload = function()
{   
    setTimeout(function(){$(".logo").css({"opacity":"1", "transform": "scale(1)"});}, 800);   
    setTimeout(function(){$(".item-1").css("opacity", "0");}, 3500);    
    setTimeout(function(){$(".item-2").css("opacity", "0");}, 4700);  
    setTimeout(function(){$(".preloader").css("display", "none");}, 7000);
}