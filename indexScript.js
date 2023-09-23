// var home = $("#Home").offset().top;
// home-=180;
var pricing = $("#Pricing").offset().top;
// console.log(pricing);
$(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
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
            if($(window).scrollTop() > pricing){
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
