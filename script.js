$(document).ready(function() {
	var grid_size = prompt("How many rows in your grid?");
	// var cell_size = $("#grid").width()/input - 2
	var $table = $("#grid");
	var html = [];
	var row, col;
	for (row=0; row < grid_size; row++) {
		html.push("<tr class='row'>");
		for(col=0; col < grid_size; col++) {
			html.push("<td class='col'></td>");
		}
		html.push("</tr>");
	}
	$table.append(html.join(''));

	// $(".row").css("width", cell_size);
	// $(".col").css("height", sell_size);

	$("td").hover(function() {
		$(this).addClass("hover");
	// }, function() {
		// $(this).removeClass("hover");
	});
});
