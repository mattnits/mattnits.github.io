var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


$(function() {
    $(".barCapacity").each(function() {
        
        var finalWidth = $(this).attr("per");
        
        $(this).css("height", "0px").animate({height: finalWidth+"%"}, {
            duration: 3000,
            step: function(now, fx) {
                // $(".score").text(Math.round(now));
                
            }
        });
    });
});

