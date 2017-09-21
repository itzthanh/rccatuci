$(document).ready(function(){
	hoverRequirements();
	hoverDownload();
	setTimeout(scrollUp,3);

	function scrollUp(){
		for (var i=0; i<7; i++){
			$(".visible").animate({top:"-=46.5"}, 2000);
		}
		setTimeout(scrollDown,1);
	}
	function scrollDown(){
		for (var i=0; i<7; i++){
			$(".visible").animate({top:"+=46.5"}, 2000);
		}
		setTimeout(scrollUp,1);
	}

	function hoverRequirements(){
		$("div > table > tbody> tr > td").mouseenter(function(){
			$("div > table > tbody> tr > td").not($(this)).not(".tableHeader").css("opacity","0.7");
		}).mouseleave(function(){
			$("div > table > tbody> tr > td").not($(this)).not(".tableHeader").css("opacity","1");
		});
	}

	function hoverDownload(){
		$("#files > div > a > img").mouseenter(function(){
			console.log("bur");
			$(this).css({top:"+=5px"});
		}).mouseleave(function(){
			$(this).css({top:"-=5px"});
		})
	}
});