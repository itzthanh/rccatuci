/*faq.js*/
faqHeaderSlider();
faqHeader();

function faqHeaderSlider(){
	$(".question").each(function(){
		var thisQuestion = $(this), state = false, answer = thisQuestion.next(".answer").hide().css("height", "auto").slideUp();
		thisQuestion.click(function(){
			state = !state;
			answer.slideToggle();
			thisQuestion.toggleClass("active", state);
			if (state == true){
				$(this).find("span").removeClass("arrow").addClass("arrowToggled");
			}
			else{
				$(this).find("span").removeClass("arrowToggled").addClass("arrow");
			}
		});
	});
}

function faqHeader(){
	$(".faqHeader").css("visibility", "visible").animate({left:"+34.5px", opacity: 1}, 2000, "linear");
}