//about.js

//global variables for photoSlide()
var imageCounter, previousPhoto;
previousPhoto = imageCounter = 0;
var photoArray = $(".slideshow");

photoSlide();

function photoSlide()
{
	if (imageCounter > photoArray.length-1){
		imageCounter = 0;
		previousPhoto = 0;
		$(".slideshow").each(function(){
			$(this).css("right", "-200px");
			$(this).css("opacity", "0");
		});
	}
	var currentImage = photoArray[imageCounter];
	var previousImage = photoArray[previousPhoto];
	var widthOffset = (864 - $(currentImage).width())/2;
	var heightOffset = (549 - $(currentImage).height())/2;
	//$(currentImage).css("marginLeft", widthOffset.toString() + "px");
	$(currentImage).css("marginTop", (heightOffset - 5).toString() + "px");
	$(currentImage).css("marginBottom", heightOffset.toString() + "px");
	$(currentImage).css("display", "block");
	var parentWidth = $(".slideshow").parent().width();
	$(currentImage).animate({right:widthOffset-3, opacity: 1}, 3000);
	setTimeout(function(){
		if ($(currentImage).width() > 400){
			$(currentImage).animate({right:widthOffset*4, opacity:0},3000);
		}
		else{
			$(currentImage).animate({right:widthOffset*2, opacity:0},3000);
		}
	},4000);
	previousPhoto = imageCounter;
	imageCounter++;
	setTimeout(photoSlide, 5500);
}
