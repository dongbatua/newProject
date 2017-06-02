function tabNav(){
	
	$(".navUl").delegate("li","mouseenter",function(){
		$(this).find("a.navTitle").css("color","#DA0056");
		$(this).find("div:first").fadeIn(200);
		$(this).find("img").fadeIn(200);
		});
	$(".navUl").on("mouseleave","li",function(){
		$(this).find("a:first").css("color","#fff");
		$(this).find("div:first").fadeOut(200);
		$(this).find("img.selectChar").fadeOut(200);
		});
	$(".navUl li .sportLife a").hover(function(){
		$(this).css("color","#DA0056");
	},
	function(){
		$(this).css("color","#888888");
	});
}	