//membershipInfo.js
createRequirementsTable();
createEventPointsTable();

function createRequirementsTable(){
	var table = document.createElement("TABLE");
	table.setAttribute("id", "requirementsTable");
	document.getElementById("requirementsTableContainer").appendChild(table);
	var points = ["10", "2.5", "35"];
	var hours = ["2 Events", "2 Hrs.", "N/A"];
	var sum = ["20", "5", "35"];
	var events = ["Community Service Events (2 minimum)", "Fundraising (2 Hrs minimum)", "Any Combination of Events"];
	var dataCell = [points, hours, sum, events];
	var headerCell = ["points", "quantity", "sum", "events"];
	for (theader = 0; theader < 4; theader++){
		if (theader == 0){
			var tableHeader = document.createElement("TR");
		}
		var th = document.createElement("TH");
		var h = document.createTextNode(headerCell[theader]);
		th.appendChild(h);
		tableHeader.appendChild(th);
	}
	table.appendChild(tableHeader);
	
	for (row = 0; row < 4; row++){
		var tableRow = document.createElement("TR");
		var columnData;
		if (row < 3){
			for (column = 0; column < 4; column++){
				var rowColumn = document.createElement("TD");
				columnData = document.createTextNode(dataCell[column][row]);
				rowColumn.appendChild(columnData);
				rowColumn.setAttribute("class", "tableColumn");
				tableRow.appendChild(rowColumn);
				tableRow.setAttribute("class", "tableRow");
			}
		}
		else{
			var rowColumn = document.createElement("TD");
			columnData = document.createTextNode("Total: 60 points");
			rowColumn.setAttribute("colspan", "4");
			rowColumn.appendChild(columnData);
			tableRow.appendChild(rowColumn);
			tableRow.setAttribute("class", "tableBottom");
		}
		table.appendChild(tableRow);
	}
}

function createEventPointsTable(){
	var table = document.createElement("TABLE");
	table.setAttribute("id", "eventsPointsTable");
	document.getElementById("eventPointsTableContainer").appendChild(table);
	// ***Certain events are not announced yet***
	//var points = ["2.5 per Hr", "5 per meeting", "10", "20", "20", "2.5 per Hr"];
	var points = ["2.5 per Hr", "5 per meeting", "10", "TBD", "TBD", "TBD", "2.5 per Hr"];
	var events = ["Fundraising", "Club Meetings", "Weekend Community Service",
	"Donating Blood Through Red Cross", "Relay for Life", "Corazon De Vida", "Poster Making"];
	//Time tentative
	var when = ["TBD", "TBD", "*Sat/Sun", "TBD", "TBD", "TBD", "TBD"];
	var dataCell = [points, events, when];
	var headerCell = ["points", "events", "when"];

	for (theader = 0; theader < 3; theader++){
		if (theader == 0){
			var tableHeader = document.createElement("TR");
		}
		var th = document.createElement("TH");
		var h = document.createTextNode(headerCell[theader]);
		th.appendChild(h);
		tableHeader.appendChild(th);
	}
	table.appendChild(tableHeader);
	
	for (row = 0; row < 7; row++){
		var tableRow = document.createElement("TR");
		var columnData;
		for (column = 0; column < 3; column++){
			var rowColumn = document.createElement("TD");
			columnData = document.createTextNode(dataCell[column][row]);
			rowColumn.appendChild(columnData);
			rowColumn.setAttribute("class", "tableColumn");
			tableRow.appendChild(rowColumn);
			tableRow.setAttribute("class", "tableRow");
		}
		table.appendChild(tableRow);
	}
}