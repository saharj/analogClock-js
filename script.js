$(document).ready(function(){

	var angle = 0;

	setInterval(function(){
	  angle+=6;
	  $("#hand").rotate({
		angle: angle,
    center: ["50%", "100%"],
    easing: function(x, t, b, c, d) { return b+(t/d)*c ; }
	});
	},1000);
	
});