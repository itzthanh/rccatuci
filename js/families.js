/*for (i=0; i<families.length; i++){
	$(families[i]).css("visibility", "visible").animate({left:$(window).width()/2 - $(".family").width()/2 , opacity: 1}, 2000, "linear");
}*/
//$(".family").css("visibility", "visible").animate({left:$(window).width()/2 - $(".family").width()/2 , opacity: 1}, 2000, "linear");


slideFamilyImages();
slideFamilyNames();
function slideFamilyImages(){

	var time = 500;
	$(".familyImg").each(function(){
		var family = $(this);
		setTimeout(function(){
			//$(family).css("visibility", "visible").animate({left:$(window).width()/2 - $(family).width()/2 , opacity: 1}, 2500, "linear");}, time);
			(family).css("visibility", "visible").animate({left:(window.innerWidth/2) - $(family).children("img").width()/2 - 10 , opacity: 1}, 2500, "linear");}, time);
			time += 500;
	});
}


function slideFamilyNames(){
	var time=500;
	$(".familyName").each(function(){
		var family = $(this);
		setTimeout(function(){
			//$(family).css("visibility", "visible").animate({right:$(window).width()/2 - $(family).width()/2 , opacity: 1}, 2500, "linear");}, time);
			(family).css("visibility", "visible").animate({right:window.innerWidth/2 - $(family).width()/2 - 8, opacity: 1}, 2500, "linear");}, time);
			time += 500;
	});
}
