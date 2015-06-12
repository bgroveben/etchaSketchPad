$(document).ready(function() {
	var $table = $("#grid");
	var html = [];
	var row, col;
	for (row=0; row < 64; row++) {
		html.push("<tr class='row'>");
		for(col=0; col < 64; col++) {
			html.push("<td class='col'></td>");
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
