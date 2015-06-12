$(document).ready(function() {
	var grid_size = prompt("How many rows and columns in your grid?");
	var $table = $("#grid");
	var html = [];
	var row, col;
	var px = 1080/grid_size;
	for (row=0; row < grid_size; row++) {
		html.push("<tr class=\"row\" style=\"width:" + px + "px;height:" + px + "px;\">");
		for(col=0; col < grid_size; col++) {
			html.push("<td class=\"col\" style=\"width:" + px + "px;height:" + px + "px;\"></td>");
		}
		html.push("</tr>");
	}
	$table.append(html.join(''));

	$("td").hover(function() {
		$(this).addClass("hover");
	// }, function() {
		// $(this).removeClass("hover");
	});
});
