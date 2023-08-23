// var home = $("#Home").offset().top;
// home-=180;
// var pricing = $("#Features").offset().top;
$(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("header").addClass("scroll headerSize py-1");
            $("header").removeClass("py-5");
            // if($(window).scrollTop() > gallery && $(window).scrollTop() < pricing)
            // {
            //     $("header").addClass("bg-w");
            //     $(".head").css("color","black");
            //     $(".head").hover( function () {
            //         $(this).css("color","white");
            //     }, function () {
            //         $(this).css("color","black");
            //     }
            //     );
            //     }
                
            // else {
            //     $("header").removeClass("bg-w ");
            //     $(".head").css("color","white");

            // }
        } else {
           $("header").removeClass("scroll headerSize py-1");
           $("header").addClass("py-5");
        }
    }
    );

//  $("header").hover(function () {
//     $("a").css("background-color","#f7d4a0");
//  }, function () {
//     $("a").css("background-color");
//  })