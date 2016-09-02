$(document).ready(function(){

	$("#hand").rotate({
		angle: 0,
    center: ["50%", "100%"],
    animateTo: 360,
    duration: 60000,
    easing: function(x, t, b, c, d) { return b+(t/d)*c ; }
	})
	
});