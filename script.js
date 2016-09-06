$(document).ready(function(){

	var dt = new Date();
	var hour = dt.getHours();
	var min = dt.getMinutes();
	var sec = dt.getSeconds();

	if(hour > 12) {
		hour -= 12;
	}
	
	sec *= 6;
	min *= 6;
	hour = (hour * 30) + (min / 12);

	console.log(hour);

	setInterval(function(){
	  sec += 6;
	  $("#secondHand").rotate({
		angle: sec,
    center: ["50%", "100%"],
    easing: function(x, t, b, c, d) { return b+(t/d)*c ; }
	});
	},1000);

	$("#longHand").rotate({
		angle: min,
		duration: 3600000,
    center: ["50%", "100%"],
    animateTo: 360,
    easing: function(x, t, b, c, d) { return b+(t/d)*c ; }
	});

	$("#shortHand").rotate({
		angle: hour,
		duration: 43200000,
    center: ["50%", "100%"],
    animateTo: 360,
    easing: function(x, t, b, c, d) { return b+(t/d)*c ; }
	});
	
});