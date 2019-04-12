jQuery(document).ready(function($) {
    console.log( "ready!" );

    // Define variables for each object that I want to animate.
    var bgImage =$(".intro"), 
    cliffside =$(".cliff"), 
    logo =$(".open-waters"), 
    txtfade =$(".water-title, .water"), 
    titleMain =$(".title-main")

// Animate in

var tlLoader = new TimelineMax();
 tlLoader
//  Call the objects based on defined variables from above.
// autoAlpha to change opacity, 0 = 0 opacity
// Because animations default to animate in order after eachother the -=("number of seconds") allows for animations to occur at same time or at a different delay. 
 .from(bgImage, 2,{autoAlpha:1})
 .from(logo, 1,{scaleY:0, transformOrigin:"center top", ease:Power1.easeOut}, '-=1.5')
 .from(bgImage, 2, {autoAlpha:0, scale: 1.5,ease:Power1.easeOut}, '-=2')
 .from(cliffside, 1.5, {autoAlpha: 0, scale: 2.5, ease:Power1.easeOut},'-=1.7')
 .from(txtfade, 2.5, {autoAlpha:0, scale: 1,ease:Power1.easeOut}, '-=.5')
 
   //Scroll Starts
    
   var controller = new ScrollMagic.Controller();
    
   var tlMainScroll = new TimelineMax()
//    scale increases size of onject on scroll
   .add([
       TweenMax.to(titleMain, 1, {autoAlpha:0}),
       TweenMax.to(bgImage, 4, {scale:3, ease:Power1.easeInOut}),
    //    x:-45% pushes the clif towards the left on scroll.
       TweenMax.to(cliffside, 4, {scale:2, y: 150, x:"-45%", ease:Power1.easeInOut}),
   ]);

   
   //Pin the scene
   var tweenHome = new ScrollMagic.Scene({
       triggerElement: '.intro-section',
       triggerHook:0,
       duration: '160%'})
   
   .setTween(tlMainScroll)
   .setPin('.intro-section')
   .addTo(controller);


//Scroll Out 

var tlMainScrollOut = new TimelineMax()
   .add([
       TweenMax.to(bgImage, 8, {autoAlpha:0}),
       TweenMax.from('.section-a', 4, {autoAlpha:0}),
       TweenMax.to(cliffside, 8, {autoAlpha:0}),
   ]);

var section2 = new ScrollMagic.Scene ({
   triggerElement: '.section-a',
   triggerHook: 0,
   duration: '40%'})
.setTween(tlMainScrollOut)
.setPin('.section-a')
.addTo(controller);

});

