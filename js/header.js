$(document).on("ready", function(){ 
	changeNav();
	$(window).resize(changeNav);
});

function changeNav(){
	var currentWidth = window.innerWidth;
	if (currentWidth <= 1024){
		$(".subMenu").css("display", "none");
		$(".hasChildren > a").click(function(e){
			e.preventDefault();
			if ($(this).siblings(".subMenu").css("display") === "none"){
				$(this).siblings(".subMenu").css("display","block");
			}
			else{
				$(this).siblings(".subMenu").css("display","none");
			}
		});
	}
}

		