url = "http://sf-pyw.mosyag.in/m04/api/forecasts"

$("#main-header").click(function() {

	$.getJSON(url, function(data) {
		message = data["prophecies"]
		set_hour(message);
	});

});

function set_hour(message) {
	$.each(message, function(i, d) {
		p = $("#p-" + i)
		p.html("<p>" + d + "</p>")
	})
}