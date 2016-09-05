$(document).ready(function(){

	var longAngle = 0;

	setInterval(function(){
	  longAngle += 6;
	  $("#secondHand").rotate({
		angle: longAngle,
    center: ["50%", "100%"],
    easing: function(x, t, b, c, d) { return b+(t/d)*c ; }
	});
	},1000);

	$("#longHand").rotate({
		angle: 0,
		duration: 3600000,
    center: ["50%", "100%"],
    animateTo: 360,
    easing: function(x, t, b, c, d) { return b+(t/d)*c ; }
	});

	$("#shortHand").rotate({
		angle: 0,
		duration: 43200000,
    center: ["50%", "100%"],
    animateTo: 360,
    easing: function(x, t, b, c, d) { return b+(t/d)*c ; }
	});
	
});