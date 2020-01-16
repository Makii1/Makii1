$(function() {

    $(".toggle").on("click", function(){
        if($(".item").hasClass("active")){
            $(".item").removeClass("active")
        }
        else {
            $(".item").addClass("active")
        }
    })
});

$(function() {
    $(".bars").on("click", function(){
        if($(".bars").hasClass("fa-times")){
            $(".bars").removeClass("fa-times")
        }
        else {
            $(".bars").addClass("fa-times")
        }   
    })
});

$(function() {
    $(".vs").on("click", function(){
        if($(".vs1").hasClass("vs2")){
            $(".vs1").removeClass("vs2")
        }
        else {
            $(".vs1").addClass("vs2")
        }   
    })
});


$(document).on('click', '.vs', function () {
    // your function here
});

document.getElementById("textChanger").onclick = function () {
    document.getElementById("changetxt").innerHTML = " <span class='special'>2019 March - 2019 october: Voluntery work in izobraževalno društvo za medije:</span> <br> Was working with the company to advance my skills and make myself better as a graphic designer. I worked on mostly makeing flyers, brochures and business cards.<br><br><span class='special2'><i>Employer name: Silva Požlep.</i></span>";
}

document.getElementById("textChanger1").onclick = function () {
    document.getElementById("changetxt").innerHTML = "<span class='special'>2017 July - 2017 September: Working in MEPI (The Duke of Edinburgh's International Award):</span> <br> I was working on creating logos for 2017, brochures, flyers, posters, greating cards, t-shirts, stickers and different iconography. I also did a visual change of possible new website, photography of events and editing the photos. I also helped with online campaigns<br><br><span class='special2'><i> Employer name: Andreja Anžur Černič</i></span>";
}

document.getElementById("textChanger2").onclick = function () {
    document.getElementById("changetxt").innerHTML = "<span class='special'>2016 September - 2016 december working in gooya d.o.o:</span> <br> I was working on UI design of some website looks, learning how to programing works and learning to creat websites.<br><br><span class='special2'><i> Employer name: Mitja Šmid</i></span>";
}

document.getElementsByClassName("fa-sort-down").onclick = function () {
    document.getElementById("textChanger textChanger1 textChanger2").innerText
}


var theCounter = $('#textareaLength'),
    textarea = $('#myTextarea'),
    maxLength = textarea.attr('length');

theCounter.text('0 /' +maxLength);
theCounter.css({  
    'top': (textarea.offset().top + textarea.height()) - theCounter.height(),
    'left': (textarea.offset().left + textarea.width()) - theCounter.width()
    
});

textarea.on('keydown', function() {  
    var theLength = $(this).val().length;
    theCounter.text($(this).val().length+' / '+maxLength)
              .css({  
                  'left': (textarea.offset().left + textarea.width()) - theCounter.width()
              });
});



(function($){
    if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
       $('input, select').on('change focus', function (e) {
            setTimeout(function () {
                $.each(
                    document.querySelectorAll('*:-webkit-autofill'),
                    function () {
                        var clone = $(this).clone(true, true);
                        $(this).after(clone).remove();
                        updateActions();
                    })
            }, 300)
        }).change();
    }
    var updateActions = function(){};// method for update input actions
    updateActions(); // start on load and on rebuild
})(jQuery)