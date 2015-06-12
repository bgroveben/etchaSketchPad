$(document).ready(function() {
	var $table = $("#grid");
	var html = [];
	var row, col;
	for (row=0; row < 17; row++) {
		html.push("<tr>");
		for(col=0; col < 17; col++) {
			html.push("<td>"+col+"</td>");
		}
		html.push("</tr>");
	}
	$table.append(html.join(''));
});
