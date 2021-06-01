
let display=0;



function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

function movetoveille(){
        TweenLite.to(window, 1.5, { scrollTo: "#VEILLE_POPUP_INFO_ID" });
    }

document.getElementById("VEILLE_POPUP_INFO_ID").onclick = function() {
    if (display<1){
        document.getElementById("text_veille_id").style.display = "block";
        display++;
        document.querySelector('#text_veille_id').scrollIntoView({behavior: 'smooth'});
        document.getElementById("background_VEILLE_id").style.borderRadius = "3.5%";
    }else{
        document.getElementById("text_veille_id").style.display = "none";
        display=0;
        document.querySelector('#VEILLE_POPUP_INFO_ID').scrollIntoView({behavior: 'smooth'});
        document.getElementById("background_VEILLE_id").style.borderRadius = "8%";
    }
} 

function scroll_arrow_up() {
    removeEventListener("click", movetoveille);
}





$(document).ready(function(){
  $('.textbox').hide();
  $('.box').click(function(){
    $('.box'). toggleClass ('box2');
    $('.textbox').slideToggle("slow");
  });
});




