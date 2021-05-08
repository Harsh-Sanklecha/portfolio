window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var positiontop = $(document).scrollTop();
    if (positiontop > 0 && positiontop < (window.innerWidth) * 0.24) {

        
        positiontop = positiontop - ((window.innerHeight) * 0.1);
        var scrollWidth = (100 * positiontop / window.innerWidth) + 6;
        var scrollWidthY = (100 * positiontop / window.innerWidth) + 6;
        
        newvalue = - (300 - 97) /(scrollWidth - 160) - 0.55

        
        if(scrollWidthY > 18){
            scrollWidthY = 18;
        }else if( scrollWidthY < 0){
            scrollWidthY = 2
        }

        if( scrollWidth < 0){
            scrollWidth = 0
        }
        
        $(".scroll-down").css({ "opacity": "0"})
        $(".first-name").css({ "transform": "Scale(" + newvalue + ") translate(" + (scrollWidth)+"vw,"+scrollWidthY+"vw)",});
        $(".last-name").css({ "transform": "Scale(" + newvalue + ") translate(-"+scrollWidth+"vw,"+(scrollWidth+5)+"vw)",});
    }
    else if (positiontop > (window.innerWidth) * 0.24){
        $(".first-name").css({ "transform": "Scale(1) translate(28.5vw,22vw)", "left": "0vw"});
        $(".last-name").css({ "transform": "Scale(1) translate(-22.5vw,35vw)"});
    }
    else {
        $(".scroll-down").css({ "opacity": "0.5"})
        $(".first-name").css({ "transform": "Scale(0.7)", "left": "-3vw"});
        $(".last-name").css({ "transform": "Scale(0.7)"});
    }
}

/* Horizontal Scroll */
TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

var ww = window.innerWidth;

var noSlides = $(".section").length;
var slideWidth = $(".section").width();
var slideContainerWidth = slideWidth * noSlides;

console.log(noSlides, slideWidth, slideContainerWidth, ww);

TweenLite.set('#lineSVG', { width: slideContainerWidth + ww })


var actionHorizontal = new TimelineMax()
    .to("#slideContainer", 1, { x: -slideContainerWidth + slideWidth })

var horizontal = createHorizontal();

function createHorizontal() {
    return new ScrollMagic.Scene({
        triggerElement: "#js-wrapper",
        triggerHook: "onLeave",
        duration: 1800
    })
        .setPin("#js-wrapper")
        .setTween(actionHorizontal)
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        // })
        .addTo(controller);

}

var skewSetter = gsap.quickSetter(".services-card", "skewY", "deg");
var proxy = {skew:0}

ScrollTrigger.create({
    onUpdate: self => {
        var skew = self.getVelocity() / -1000;

        if(Math.abs(skew) > Math.abs(proxy.skew)){
            proxy.skew = skew;

            gsap.to(proxy, {skew:0, duration:1, overwrite:true, onUpdate: ()=> skewSetter(proxy.skew)})
        }
    }
});

gsap.set(".servuces-card",{transformOrigin:"right center", force3D:true});