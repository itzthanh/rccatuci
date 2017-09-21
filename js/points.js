$(document).ready(function(){
	$(".logos").animate({ opacity: 0 }, 0);
	//Black Widow
	$(".logos").eq(0).css({left: "-=150px", top:"-50px"});
	$(".logos").eq(0).animate({left: "+=150px", opacity: 1}, 800);
	$(".logos").eq(0).animate({top: "+=50px", opacity: 1}, 800);

	//Cpt America
	$(".logos").eq(1).css({top: "-=150px", left: "+=50px"});
	$(".logos").eq(1).animate({top: "+=150px", left: "-=50px", opacity: 1}, 800);
	//Thor
	$(".logos").eq(2).css({top: "+=150px", left: "-=150px"});
	$(".logos").eq(2).animate({top: "-=150px", left: "+=150px", opacity: 1}, 800);
	//Iron Man
	$(".logos").eq(3).css({left: "+=150px"});
	$(".logos").eq(3).animate({left: "-=150px", opacity: 1}, 800);

	$(".logos").mouseenter(function(){
		$(this).css({top: "+=10px"});
	}).mouseleave(function(){
		$(this).css({top: "-=10px"});
	});
});