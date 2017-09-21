var currentWeekNum = getCurrentWeekNum();
addWeekSliders(null, currentWeekNum);
triggerHamburger(currentWeekNum);

function getCurrentWeekNum(){

	var fall2016 = new Date(2016,08,26,00,00,00);
	var winter2017 = new Date(2017,00,09,00,00,00);
	var spring2017 = new Date(2017,03,03,00,00,00);
	var summer2017 = new Date(2017,05,16,00,00,00);

	var msPerDay = 1000 * 60 * 60 * 24;
	var currentDate = new Date();
	var currentWeek;

	var fallWeek0= new Date(fall2016);
	var winterWeek0= new Date(winter2017);
	var springWeek0= new Date(spring2017);
	fallWeek0.setDate(fallWeek0.getDate() -7);
	winterWeek0.setDate(winterWeek0.getDate() -7);
	springWeek0.setDate(springWeek0.getDate() -7);

	if(currentDate < fall2016 && currentDate >= fallWeek0){
		currentWeek = (currentDate.getTime() - fall2016.getTime())/msPerDay;
	}

	else if(currentDate < winter2017 && currentDate >= winterWeek0){
		currentWeek = (currentDate.getTime() - winter2017.getTime())/msPerDay;
	}

	else if(currentDate < spring2017 && currentDate >= springWeek0){
		currentWeek = (currentDate.getTime() - spring2017.getTime())/msPerDay;
	}

	else if (currentDate < fall2016){
		return;
	}

	else if (currentDate >= fall2016 && currentDate < winter2017){
		currentWeek = (Math.abs(currentDate.getTime() - fall2016.getTime()))/msPerDay;
	}
	else if (currentDate >= winter2017 && currentDate < spring2017){
		currentWeek = (Math.abs(currentDate.getTime() - winter2017.getTime()))/msPerDay;
	}
	else if (currentDate >= spring2017 && currentDate < summer2017){
		currentWeek = (Math.abs(currentDate.getTime() - spring2017.getTime()))/msPerDay;
	}

	if (currentWeek != null && currentWeek < 70){
		var message = document.getElementById("currentWeekSpan");
		var weekNum = Math.ceil(currentWeek/7);
		if(currentWeek/7 < 0){
			weekNum = 0;
		}
		else if (weekNum.toFixed(1) === "0.0"){
			weekNum = 1;
		}
		message.innerText = message.innerText.replace("Break", (" " + weekNum));
		return displayCurrentWeek(weekNum);
	}
}

function displayCurrentWeek(weekNum){
	var announcementWeeks = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
	var announcementWeekIndex = announcementWeeks.indexOf(weekNum);

	if (announcementWeekIndex !== -1){
		for (prevWeek = announcementWeeks.length - 1; prevWeek >= announcementWeekIndex; prevWeek--){
			var weekToHighlight = document.getElementsByClassName("weekContainer")[prevWeek];
			weekToHighlight.style.display = "block";
		}
		var toDisplay = document.getElementsByClassName("week")[announcementWeekIndex];
		toDisplay.style.display = "block";
		document.getElementsByClassName("weekHeader")[announcementWeekIndex].style.textDecoration = "underline";
	}
	return weekNum;
}

function addWeekSliders(showAllBool, weekNum){
	var weeks = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
	var announcementWeekIndex = weeks.indexOf(weekNum);
	if (showAllBool === true){
		for (i=weeks.length-1; i > announcementWeekIndex; i--){
			if ($("#week" + weeks[i]).css("display") === "none"){
				var h = $("#week" + weeks[i]).height() + 50;
				//$("#week" + weeks[i]).parent().css("height", "160px");
				$("#week" + weeks[i]).parent().css("height", h.toString());
				$("#week" + weeks[i]).toggle("fold", {horizFirst: false, size: 35}, 1000);
			}
		}
	}
	else if (showAllBool === false){
		for (j=weeks.length-1; j > announcementWeekIndex; j--){
			if ($("#week" + weeks[j]).css("display") === "block"){
				/*$("#week" + weeks[j]).toggle("fold", {horizFirst: false, size: 35}, 1000, function(){
					$("#week" + weeks[j]).parent().css("height", "26px");
				});*/
				$("#week" + weeks[j]).toggle("fold", {horizFirst: false, size: 35}, 1000, function(j){
					return function(){
						$("#week" + weeks[j]).parent().css("height", "26px");
					};
				}(j));
			}
		}
	}
	else{
		$(".weekHeader").each(function(){
			var week = $(this);
			var announcement = week.next(".week");
			week.click(function(){
				if (announcement.is($("#week" + weekNum)) === false && (week.is(":animated") === false)){
					if (week.parent().height() === 26){
						var h = week.siblings(".week").height() + 50;
						week.parent().css("height", h.toString());
						announcement.stop().toggle("fold", {horizFirst: false, size: 35}, 1000);
					}
					else{
						announcement.stop().toggle("fold", {horizFirst: false, size: 35}, 1000, function(){
							week.parent().css("height", "26px");
						});
					}
					
				}
			});
		});
	}
}

function triggerHamburger(currentWeek){
	var state = false;
	$(".hamburger, #buttonTitle").click(function(){
		state = !state;
		$(this).toggleClass("is-active");
		addWeekSliders(state, currentWeek);
	});
}