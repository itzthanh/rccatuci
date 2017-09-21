$(document).ready(function(){
	$(".boardMemberImage").css("visibility", "visible");
	$(".boardMemberImage").animate({"opacity": "1"}, 2500);
	$("#groupPhoto > img").click(function(){
		var imageWidth;
		if ($(this).width() < 700){
			imageWidth = "+=150px";
		}
		else{
			imageWidth = "-=150px";
		}
		$(this).css("maxWidth", "850px");
		$(this).animate({width: imageWidth}, 1000);
	});
});