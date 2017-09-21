$(document).ready(function(){

	getCurrentWeekNum();

	function getCurrentWeekNum(){

		var fall2016 = new Date(2016,08,26,00,00,00);
		var winter2017 = new Date(2017,00,09,00,00,00);
		var spring2017 = new Date(2017,03,03,00,00,00);
		var summer2017 = new Date(2017,05,16,00,00,00);

		var msPerDay = 1000 * 60 * 60 * 24;
		var currentDate = new Date();
		var currentWeek;

		if (currentDate < fall2016){
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
		else{
			var lastWeek = new Date(2016,07,15);
			currentWeek = (Math.abs(currentDate.getTime() - lastWeek.getTime()))/msPerDay;
		}

		if (currentWeek != null && (currentWeek < 70)){
			var weekNum = Math.ceil(currentWeek/7);
			if (weekNum === 0){
				weekNum = 1;
			}
			highlightCurrentWeek(weekNum);
		}
	}

	function highlightCurrentWeek(weekNum){
		$("#week" + weekNum).addClass("currentWeek");
	}
});