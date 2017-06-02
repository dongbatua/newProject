function timeCaculate(){
	var timer = "2017-6-8";
	var endtime = new Date(timer);
	var nowtime = new Date();
	var lefttime = parseInt((endtime.getTime()-nowtime.getTime())/1000);
	var day = parseInt(lefttime/3600/24);
	lefttime1 = lefttime-(day*3600*24);
	var hour = parseInt(lefttime/3600%24);
	lefttime2 = lefttime1-(hour*3600);
	var minute = parseInt(lefttime/60%60);
	lefttime3 = lefttime2-(minute*60);
	var second = parseInt(lefttime3%60);
	
	$(".day i").html(day);
	$(".hour i").html(hour);
	$(".minute i").html(minute);
	$(".second i").html(second);
	if(lefttime == 0){
		$(".day i").html("0");
		$(".hour i").html("0");
		$(".minute i").html("0");
		$(".second i").html("0");
		window.clear(left);
	}
}
var left;
function go(){
	left = setInterval(timeCaculate,1000);
}

