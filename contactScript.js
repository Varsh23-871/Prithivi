$(window).on("scroll", function() {
    if($(window).scrollTop() > 60) {
        $("header").addClass("scroll headerSize py-1");
        $("header").removeClass("py-5");
    } else {
       $("header").removeClass("scroll headerSize py-1");
       $("header").addClass("py-5");
    }
}
);
