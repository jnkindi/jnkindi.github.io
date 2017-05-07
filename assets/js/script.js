$(function(){"use strict";var menuShow=$(".mobile-menu .fa-bars"),menuHide=$(".mobile-menu .fa-times"),menuBody=$(".navigation-bar"),menuBodyWidth=menuBody.outerWidth(),skills=$("#skills"),education=$("#education"),experience=$("#experience"),portfolio=$("#portfolio"),hobbies=$("#hobbies"),contact=$("#contact"),aboutButton=$(".about-button"),skillsButton=$(".skills-button"),educationButton=$(".education-button"),experienceButton=$(".experience-button"),portfolioButton=$(".portfolio-button"),hobbiesButton=$(".hobbies-button"),contactButton=$(".contact-button"),workMix=$(".work-filtering .mix"),galleryImg=$(".portfolio-lightbox .gallery-image img"),galleryH4=$(".portfolio-lightbox .gallery-image h4"),galleryP=$(".portfolio-lightbox .gallery-image p"),galleryLink=$(".portfolio-lightbox .gallery-image a"),$window=$(window),Body=$("body"),htmlBody=$("html, body"),personalSkill1=70,personalSkill2=80,personalSkill3=75,personalSkill4=90,professionalSkill1=90,professionalSkill2=55,professionalSkill3=75,professionalSkill4=60;if($(".about .container").outerHeight()<$window.height()){$(".about .container").outerHeight($window.height())}$window.on("resize",function(){if($(".about .container").outerHeight()<$window.height()){$(".about .container").outerHeight($window.height())}else{$(".about .container").outerHeight("")}});menuShow.on("click",function(){$(this).hide(0);menuHide.show(0).css("display","flex");menuBody.animate({right:0});Body.animate({marginRight:menuBodyWidth,marginLeft:"-"+menuBodyWidth})});menuHide.on("click",function(){$(this).hide(0);menuShow.show(0);menuBody.animate({right:"-60px"});Body.animate({marginRight:"",marginLeft:""})});if($window.width()<882){$(".navigation-bar li i").on("click",function(){menuHide.hide(0);menuShow.show(0);menuBody.animate({right:"-60px"});Body.animate({marginRight:"",marginLeft:""})})}$window.on("resize",function(){if($window.width()>=882){menuShow.css("display","");menuHide.css("display","");menuBody.css("right","");Body.css({marginRight:"",marginLeft:""})}else{menuShow.css("display","");menuHide.css("display","");menuBody.css("right","");Body.css({marginRight:"",marginLeft:""})}});$(".navigation-bar li i").on("click",function(){htmlBody.animate({scrollTop:$("#"+$(this).data("value")).offset().top},1500)});if($window.scrollTop()<skills.offset().top-100){aboutButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}if($window.scrollTop()>=skills.offset().top-100&&$window.scrollTop()<education.offset().top-100){skillsButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}if($window.scrollTop()>=education.offset().top-100&&$window.scrollTop()<experience.offset().top-100){educationButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}if($window.scrollTop()>=experience.offset().top-100&&$window.scrollTop()<hobbies.offset().top-100){experienceButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}if($window.scrollTop()>=portfolio.offset().top-100&&$window.scrollTop()<hobbies.offset().top-100){portfolioButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}if($window.scrollTop()>=hobbies.offset().top-100&&$window.scrollTop()<contact.offset().top-100){hobbiesButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}if($window.scrollTop()>=contact.offset().top-100){contactButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}$window.on("scroll",function(){if($window.scrollTop()<skills.offset().top-100){aboutButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}});$window.on("scroll",function(){if($window.scrollTop()>=skills.offset().top-100&&$window.scrollTop()<education.offset().top-100){skillsButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}});$window.on("scroll",function(){if($window.scrollTop()>=education.offset().top-100&&$window.scrollTop()<experience.offset().top-100){educationButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}});$window.on("scroll",function(){if($window.scrollTop()>=experience.offset().top-100&&$window.scrollTop()<hobbies.offset().top-100){experienceButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}});$window.on("scroll",function(){if($window.scrollTop()>=portfolio.offset().top-100&&$window.scrollTop()<hobbies.offset().top-100){portfolioButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}});$window.on("scroll",function(){if($window.scrollTop()>=hobbies.offset().top-100&&$window.scrollTop()<contact.offset().top-100){hobbiesButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}});$window.on("scroll",function(){if($window.scrollTop()>=contact.offset().top-100){contactButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")}});$window.on("scroll.Skills1",function(){if($(this).scrollTop()>=$(".progress-content .personal-skills").offset().top-$window.height()+220){$(".personal-skills .progress-bar:first-of-type .bar-data .bar-value strong").countTo({from:0,to:personalSkill1,speed:1800});$(".personal-skills .progress-bar:first-of-type .bar-line .bar-fill").animate({width:personalSkill1+"%"},1800);$(".personal-skills .progress-bar:nth-of-type(2) .bar-data .bar-value strong").countTo({from:0,to:personalSkill2,speed:1800});$(".personal-skills .progress-bar:nth-of-type(2) .bar-line .bar-fill").animate({width:personalSkill2+"%"},1800);$(".personal-skills .progress-bar:nth-of-type(3) .bar-data .bar-value strong").countTo({from:0,to:personalSkill3,speed:1800});$(".personal-skills .progress-bar:nth-of-type(3) .bar-line .bar-fill").animate({width:personalSkill3+"%"},1800);$(".personal-skills .progress-bar:last-of-type .bar-data .bar-value strong").countTo({from:0,to:personalSkill4,speed:1800});$(".personal-skills .progress-bar:last-of-type .bar-line .bar-fill").animate({width:personalSkill4+"%"},1800);$window.off("scroll.Skills1")}});$window.on("scroll.Skills2",function(){if($(this).scrollTop()>=$(".progress-content .professional-skills").offset().top-$window.height()+220){$(".professional-skills .progress-bar:first-of-type .bar-data .bar-value strong").countTo({from:0,to:professionalSkill1,speed:1800});$(".professional-skills .progress-bar:first-of-type .bar-line .bar-fill").animate({width:professionalSkill1+"%"},1800);$(".professional-skills .progress-bar:nth-of-type(2) .bar-data .bar-value strong").countTo({from:0,to:professionalSkill2,speed:1800});$(".professional-skills .progress-bar:nth-of-type(2) .bar-line .bar-fill").animate({width:professionalSkill2+"%"},1800);$(".professional-skills .progress-bar:nth-of-type(3) .bar-data .bar-value strong").countTo({from:0,to:professionalSkill3,speed:1800});$(".professional-skills .progress-bar:nth-of-type(3) .bar-line .bar-fill").animate({width:professionalSkill3+"%"},1800);$(".professional-skills .progress-bar:last-of-type .bar-data .bar-value strong").countTo({from:0,to:professionalSkill4,speed:1800});$(".professional-skills .progress-bar:last-of-type .bar-line .bar-fill").animate({width:professionalSkill4+"%"},1800);$window.off("scroll.Skills2")}});if($window.width()<768){$(".education-content li:nth-of-type(odd) div, .experience-content li:nth-of-type(odd) div").removeClass("fadeInLeft").addClass("fadeInUp");$(".education-content li:nth-of-type(even) div, .experience-content li:nth-of-type(even) div").removeClass("fadeInRight").addClass("fadeInUp")}else{$(".education-content li:nth-of-type(odd) div, .experience-content li:nth-of-type(odd) div").removeClass("fadeInUp").addClass("fadeInLeft");$(".education-content li:nth-of-type(even) div, .experience-content li:nth-of-type(even) div").removeClass("fadeInUp").addClass("fadeInRight")}workMix.on("mouseover",function(){$(this).children(".overlay").fadeIn()});workMix.on("mouseleave",function(){$(this).children(".overlay").fadeOut()});$(".portfolio .portfolio-content ul li").on("click",function(){$(this).addClass("active").siblings().removeClass("active")});$(".portfolio .portfolio-content ul li:first-of-type").on("click",function(){workMix.fadeOut(0).fadeIn(600)});$(".portfolio .portfolio-content ul li:not(:first-of-type)").on("click",function(){workMix.fadeOut(0);$("."+$(this).data("value")).fadeIn(600)});$(".work-filtering .mix .overlay .fa-search-plus").on("click",function(){var mixIndex=$(this).parents(".mix").index();galleryImg.attr("src",$(this).parents(".overlay").siblings("img").attr("src"));galleryImg.attr("alt",$(this).parents(".overlay").siblings("img").attr("alt"));galleryH4.text($(this).parents(".overlay").siblings(".lightbox-heading").text());galleryP.text($(this).parents(".overlay").siblings(".lightbox-paragraph").text());galleryLink.attr("href",$(this).parents(".overlay").siblings(".lightbox-preview").attr("href"));$(".portfolio-lightbox").fadeIn().css("display","flex");$(".portfolio-lightbox .gallery-navigate .next").on("click",function(){if(mixIndex<$(".work-filtering .mix").length-1){mixIndex++}else{mixIndex=0}galleryImg.attr("src",$(".work-filtering .mix").eq(mixIndex).children("img").attr("src"));galleryImg.attr("alt",$(".work-filtering .mix").eq(mixIndex).children("img").attr("alt"));galleryH4.text($(".work-filtering .mix").eq(mixIndex).children(".lightbox-heading").text());galleryP.text($(".work-filtering .mix").eq(mixIndex).children(".lightbox-paragraph").text());galleryLink.attr("href",$(".work-filtering .mix").eq(mixIndex).children(".lightbox-preview").attr("href"))});$(".portfolio-lightbox .gallery-navigate .prev").on("click",function(){if(mixIndex>0){mixIndex--}else if(mixIndex===0){mixIndex=$(".work-filtering .mix").length-1}galleryImg.attr("src",$(".work-filtering .mix").eq(mixIndex).children("img").attr("src"));galleryImg.attr("alt",$(".work-filtering .mix").eq(mixIndex).children("img").attr("alt"));galleryH4.text($(".work-filtering .mix").eq(mixIndex).children(".lightbox-heading").text());galleryP.text($(".work-filtering .mix").eq(mixIndex).children(".lightbox-paragraph").text());galleryLink.attr("href",$(".work-filtering .mix").eq(mixIndex).children(".lightbox-preview").attr("href"))})});$(".portfolio-lightbox i").on("click",function(){$(".portfolio-lightbox").fadeOut()});if($window.height()<500){galleryImg.css({maxHeight:"200px"});galleryH4.css({textAlign:"center"});galleryP.css({display:"none"})}else{galleryImg.css({maxHeight:""});galleryH4.css({textAlign:""});galleryP.css({display:""})}$window.on("resize",function(){if($window.height()<500){galleryImg.css({maxHeight:"200px"});galleryH4.css({textAlign:"center"});galleryP.css({display:"none"})}else{galleryImg.css({maxHeight:""});galleryH4.css({textAlign:""});galleryP.css({display:""})}});google.maps.event.addDomListener(window,"load",myMap);function myMap(){var myCenter=new google.maps.LatLng(30.0444196,31.23571160000006),mapOptions={center:myCenter,mapTypeControl:false,streetViewControl:false,scrollwheel:false,zoom:12},mapCanvas=document.getElementById("map"),map=new google.maps.Map(mapCanvas,mapOptions),marker=new google.maps.Marker({position:myCenter,icon:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"});marker.setMap(map)}(new WOW).init();$("html").niceScroll({cursorcolor:"#2896ca",cursorborder:"none",cursorwidth:"6px",horizrailenabled:false,zindex:"10000"})});
$(function() {
    "use strict";
    var menuShow = $(".mobile-menu .fa-bars"),
        menuHide = $(".mobile-menu .fa-times"),
        menuBody = $(".navigation-bar"),
        menuBodyWidth = menuBody.outerWidth(),
        skills = $("#skills"),
        education = $("#education"),
        experience = $("#experience"),
        portfolio = $("#portfolio"),
        hobbies = $("#hobbies"),
        contact = $("#contact"),
        aboutButton = $(".about-button"),
        skillsButton = $(".skills-button"),
        educationButton = $(".education-button"),
        experienceButton = $(".experience-button"),
        portfolioButton = $(".portfolio-button"),
        hobbiesButton = $(".hobbies-button"),
        contactButton = $(".contact-button"),
        workMix = $(".work-filtering .mix"),
        galleryImg = $(".portfolio-lightbox .gallery-image img"),
        galleryH4 = $(".portfolio-lightbox .gallery-image h4"),
        galleryP = $(".portfolio-lightbox .gallery-image p"),
        galleryLink = $(".portfolio-lightbox .gallery-image a"),
        $window = $(window),
        Body = $("body"),
        htmlBody = $("html, body"),
        personalSkill1 = 70,
        personalSkill2 = 80,
        personalSkill3 = 75,
        personalSkill4 = 90,
        professionalSkill1 = 75,
        professionalSkill2 = 55,
        professionalSkill3 = 75,
        professionalSkill4 = 80;
    if ($(".about .container").outerHeight() < $window.height()) {
        $(".about .container").outerHeight($window.height())
    }
    $window.on("resize", function() {
        if ($(".about .container").outerHeight() < $window.height()) {
            $(".about .container").outerHeight($window.height())
        } else {
            $(".about .container").outerHeight("")
        }
    });
    menuShow.on("click", function() {
        $(this).hide(0);
        menuHide.show(0).css("display", "flex");
        menuBody.animate({
            right: 0
        });
        Body.animate({
            marginRight: menuBodyWidth,
            marginLeft: "-" + menuBodyWidth
        })
    });
    menuHide.on("click", function() {
        $(this).hide(0);
        menuShow.show(0);
        menuBody.animate({
            right: "-60px"
        });
        Body.animate({
            marginRight: "",
            marginLeft: ""
        })
    });
    if ($window.width() < 882) {
        $(".navigation-bar li i").on("click", function() {
            menuHide.hide(0);
            menuShow.show(0);
            menuBody.animate({
                right: "-60px"
            });
            Body.animate({
                marginRight: "",
                marginLeft: ""
            })
        })
    }
    $window.on("resize", function() {
        if ($window.width() >= 882) {
            menuShow.css("display", "");
            menuHide.css("display", "");
            menuBody.css("right", "");
            Body.css({
                marginRight: "",
                marginLeft: ""
            })
        } else {
            menuShow.css("display", "");
            menuHide.css("display", "");
            menuBody.css("right", "");
            Body.css({
                marginRight: "",
                marginLeft: ""
            })
        }
    });
    $(".navigation-bar li i").on("click", function() {
        htmlBody.animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1500)
    });
    if ($window.scrollTop() < skills.offset().top - 100) {
        aboutButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
    }
    if ($window.scrollTop() >= skills.offset().top - 100 && $window.scrollTop() < education.offset().top - 100) {
        skillsButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
    }
    if ($window.scrollTop() >= education.offset().top - 100 && $window.scrollTop() < experience.offset().top - 100) {
        educationButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
    }
    if ($window.scrollTop() >= experience.offset().top - 100 && $window.scrollTop() < hobbies.offset().top - 100) {
        experienceButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
    }
    if ($window.scrollTop() >= portfolio.offset().top - 100 && $window.scrollTop() < hobbies.offset().top - 100) {
        portfolioButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
    }
    if ($window.scrollTop() >= hobbies.offset().top - 100 && $window.scrollTop() < contact.offset().top - 100) {
        hobbiesButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
    }
    if ($window.scrollTop() >= contact.offset().top - 100) {
        contactButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
    }
    $window.on("scroll", function() {
        if ($window.scrollTop() < skills.offset().top - 100) {
            aboutButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
        }
    });
    $window.on("scroll", function() {
        if ($window.scrollTop() >= skills.offset().top - 100 && $window.scrollTop() < education.offset().top - 100) {
            skillsButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
        }
    });
    $window.on("scroll", function() {
        if ($window.scrollTop() >= education.offset().top - 100 && $window.scrollTop() < experience.offset().top - 100) {
            educationButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
        }
    });
    $window.on("scroll", function() {
        if ($window.scrollTop() >= experience.offset().top - 100 && $window.scrollTop() < hobbies.offset().top - 100) {
            experienceButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
        }
    });
    $window.on("scroll", function() {
        if ($window.scrollTop() >= portfolio.offset().top - 100 && $window.scrollTop() < hobbies.offset().top - 100) {
            portfolioButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
        }
    });
    $window.on("scroll", function() {
        if ($window.scrollTop() >= hobbies.offset().top - 100 && $window.scrollTop() < contact.offset().top - 100) {
            hobbiesButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
        }
    });
    $window.on("scroll", function() {
        if ($window.scrollTop() >= contact.offset().top - 100) {
            contactButton.addClass("active").parent("li").siblings("li").children("i").removeClass("active")
        }
    });
    $window.on("scroll.Skills1", function() {
        if ($(this).scrollTop() >= $(".progress-content .personal-skills").offset().top - $window.height() + 220) {
            $(".personal-skills .progress-bar:first-of-type .bar-data .bar-value strong").countTo({
                from: 0,
                to: personalSkill1,
                speed: 1800
            });
            $(".personal-skills .progress-bar:first-of-type .bar-line .bar-fill").animate({
                width: personalSkill1 + "%"
            }, 1800);
            $(".personal-skills .progress-bar:nth-of-type(2) .bar-data .bar-value strong").countTo({
                from: 0,
                to: personalSkill2,
                speed: 1800
            });
            $(".personal-skills .progress-bar:nth-of-type(2) .bar-line .bar-fill").animate({
                width: personalSkill2 + "%"
            }, 1800);
            $(".personal-skills .progress-bar:nth-of-type(3) .bar-data .bar-value strong").countTo({
                from: 0,
                to: personalSkill3,
                speed: 1800
            });
            $(".personal-skills .progress-bar:nth-of-type(3) .bar-line .bar-fill").animate({
                width: personalSkill3 + "%"
            }, 1800);
            $(".personal-skills .progress-bar:last-of-type .bar-data .bar-value strong").countTo({
                from: 0,
                to: personalSkill4,
                speed: 1800
            });
            $(".personal-skills .progress-bar:last-of-type .bar-line .bar-fill").animate({
                width: personalSkill4 + "%"
            }, 1800);
            $window.off("scroll.Skills1")
        }
    });
    $window.on("scroll.Skills2", function() {
        if ($(this).scrollTop() >= $(".progress-content .professional-skills").offset().top - $window.height() + 220) {
            $(".professional-skills .progress-bar:first-of-type .bar-data .bar-value strong").countTo({
                from: 0,
                to: professionalSkill1,
                speed: 1800
            });
            $(".professional-skills .progress-bar:first-of-type .bar-line .bar-fill").animate({
                width: professionalSkill1 + "%"
            }, 1800);
            $(".professional-skills .progress-bar:nth-of-type(2) .bar-data .bar-value strong").countTo({
                from: 0,
                to: professionalSkill2,
                speed: 1800
            });
            $(".professional-skills .progress-bar:nth-of-type(2) .bar-line .bar-fill").animate({
                width: professionalSkill2 + "%"
            }, 1800);
            $(".professional-skills .progress-bar:nth-of-type(3) .bar-data .bar-value strong").countTo({
                from: 0,
                to: professionalSkill3,
                speed: 1800
            });
            $(".professional-skills .progress-bar:nth-of-type(3) .bar-line .bar-fill").animate({
                width: professionalSkill3 + "%"
            }, 1800);
            $(".professional-skills .progress-bar:last-of-type .bar-data .bar-value strong").countTo({
                from: 0,
                to: professionalSkill4,
                speed: 1800
            });
            $(".professional-skills .progress-bar:last-of-type .bar-line .bar-fill").animate({
                width: professionalSkill4 + "%"
            }, 1800);
            $window.off("scroll.Skills2")
        }
    });
    if ($window.width() < 768) {
        $(".education-content li:nth-of-type(odd) div, .experience-content li:nth-of-type(odd) div").removeClass("fadeInLeft").addClass("fadeInUp");
        $(".education-content li:nth-of-type(even) div, .experience-content li:nth-of-type(even) div").removeClass("fadeInRight").addClass("fadeInUp")
    } else {
        $(".education-content li:nth-of-type(odd) div, .experience-content li:nth-of-type(odd) div").removeClass("fadeInUp").addClass("fadeInLeft");
        $(".education-content li:nth-of-type(even) div, .experience-content li:nth-of-type(even) div").removeClass("fadeInUp").addClass("fadeInRight")
    }
    workMix.on("mouseover", function() {
        $(this).children(".overlay").fadeIn()
    });
    workMix.on("mouseleave", function() {
        $(this).children(".overlay").fadeOut()
    });
    $(".portfolio .portfolio-content ul li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active")
    });
    $(".portfolio .portfolio-content ul li:first-of-type").on("click", function() {
        workMix.fadeOut(0).fadeIn(600)
    });
    $(".portfolio .portfolio-content ul li:not(:first-of-type)").on("click", function() {
        workMix.fadeOut(0);
        $("." + $(this).data("value")).fadeIn(600)
    });
    $(".work-filtering .mix .overlay .fa-search-plus").on("click", function() {
        var mixIndex = $(this).parents(".mix").index();
        galleryImg.attr("src", $(this).parents(".overlay").siblings("img").attr("src"));
        galleryImg.attr("alt", $(this).parents(".overlay").siblings("img").attr("alt"));
        galleryH4.text($(this).parents(".overlay").siblings(".lightbox-heading").text());
        galleryP.text($(this).parents(".overlay").siblings(".lightbox-paragraph").text());
        galleryLink.attr("href", $(this).parents(".overlay").siblings(".lightbox-preview").attr("href"));
        $(".portfolio-lightbox").fadeIn().css("display", "flex");
        $(".portfolio-lightbox .gallery-navigate .next").on("click", function() {
            if (mixIndex < $(".work-filtering .mix").length - 1) {
                mixIndex++
            } else {
                mixIndex = 0
            }
            galleryImg.attr("src", $(".work-filtering .mix").eq(mixIndex).children("img").attr("src"));
            galleryImg.attr("alt", $(".work-filtering .mix").eq(mixIndex).children("img").attr("alt"));
            galleryH4.text($(".work-filtering .mix").eq(mixIndex).children(".lightbox-heading").text());
            galleryP.text($(".work-filtering .mix").eq(mixIndex).children(".lightbox-paragraph").text());
            galleryLink.attr("href", $(".work-filtering .mix").eq(mixIndex).children(".lightbox-preview").attr("href"))
        });
        $(".portfolio-lightbox .gallery-navigate .prev").on("click", function() {
            if (mixIndex > 0) {
                mixIndex--
            } else if (mixIndex === 0) {
                mixIndex = $(".work-filtering .mix").length - 1
            }
            galleryImg.attr("src", $(".work-filtering .mix").eq(mixIndex).children("img").attr("src"));
            galleryImg.attr("alt", $(".work-filtering .mix").eq(mixIndex).children("img").attr("alt"));
            galleryH4.text($(".work-filtering .mix").eq(mixIndex).children(".lightbox-heading").text());
            galleryP.text($(".work-filtering .mix").eq(mixIndex).children(".lightbox-paragraph").text());
            galleryLink.attr("href", $(".work-filtering .mix").eq(mixIndex).children(".lightbox-preview").attr("href"))
        })
    });
    $(".portfolio-lightbox i").on("click", function() {
        $(".portfolio-lightbox").fadeOut()
    });
    if ($window.height() < 500) {
        galleryImg.css({
            maxHeight: "200px"
        });
        galleryH4.css({
            textAlign: "center"
        });
        galleryP.css({
            display: "none"
        })
    } else {
        galleryImg.css({
            maxHeight: ""
        });
        galleryH4.css({
            textAlign: ""
        });
        galleryP.css({
            display: ""
        })
    }
    $window.on("resize", function() {
        if ($window.height() < 500) {
            galleryImg.css({
                maxHeight: "200px"
            });
            galleryH4.css({
                textAlign: "center"
            });
            galleryP.css({
                display: "none"
            })
        } else {
            galleryImg.css({
                maxHeight: ""
            });
            galleryH4.css({
                textAlign: ""
            });
            galleryP.css({
                display: ""
            })
        }
    });
    google.maps.event.addDomListener(window, "load", myMap);

    function myMap() {
        var myCenter = new google.maps.LatLng(-1.944676, 30.089745),
            mapOptions = {
                center: myCenter,
                mapTypeControl: false,
                streetViewControl: false,
                scrollwheel: false,
                zoom: 12
            },
            mapCanvas = document.getElementById("map"),
            map = new google.maps.Map(mapCanvas, mapOptions),
            marker = new google.maps.Marker({
                position: myCenter,
                icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            });
        marker.setMap(map)
    }(new WOW).init();
    $("html").niceScroll({
        cursorcolor: "#2896ca",
        cursorborder: "none",
        cursorwidth: "6px",
        horizrailenabled: false,
        zindex: "10000"
    })
});