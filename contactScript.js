var foot = $("footer").offset().top;
$(window).on("scroll", function() {
    if($(window).scrollTop() > 60) {
        $("header").addClass("scroll headerSize py-1");
        $("header").removeClass("py-5");
        // var foot = $("#footer").offset().top;
        if($(window).scrollTop() > (foot-400)){
            $("header").css("visibility","hidden");
        }
        else{
            $("header").css("visibility","visible");
        }
    } else {
       $("header").removeClass("scroll headerSize py-1");
       $("header").addClass("py-5");
    }
}
);
