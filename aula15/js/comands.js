$(document).ready(function () {
    setInterval(function(){
        $("#oi").each(function() {
            var elem = $(this);
            setInterval(function() {
                if (elem.css('visibility') == 'hidden') {
                    elem.css('visibility', 'visible');
                } else {
                    elem.css('visibility', 'hidden');
                }    
            }, 3000);
        });
    },1500);
    
})


