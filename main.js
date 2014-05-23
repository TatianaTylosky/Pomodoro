$( document ).ready(function() {
  $('.add').click(additem);

	$("table.list").on('click', ".delete", function() {
		$(this).closest("div.newitem").remove();
});

});

var additem = function () {

	var activity = $( "#activity" ).val();
	var minutes = $( "#minutes" ).val();

	if (activity === "" && minutes === "") {
		$("#activity").fadeIn(100).fadeOut(100).fadeIn(100);
		$("#minutes").fadeIn(100).fadeOut(100).fadeIn(100);
		return 0;
	}

	else if (activity === "") {
		$("#activity").fadeIn(100).fadeOut(100).fadeIn(100);
		return 0;
	}

	else if (minutes === "") {
		$("#minutes").fadeIn(100).fadeOut(100).fadeIn(100);
		return 0;
	}

	else {

	$("table.list").append("<div></div>");

	$("table.list > div").last().addClass("newitem");

	$("div.newitem").last().append("<tr></tr>");

	$("div.newitem > tr").last().hide().append('<img class="delete" position="relative" top="5px" width="50px"src="delete.png" />').fadeIn("slow");

	$("table.list > div > tr").last().append("<td></td>");
	$("table.list > div > tr > td").addClass("data");
	$("table.list > div > tr > td").last().hide().fadeIn("slow").append(activity);



	$("table.list > div > tr").last().append("<td></td>");
	$("table.list > div > tr > td").addClass("data");
	$("table.list > div > tr > td").last().hide().append(minutes).fadeIn("slow");

	$(".container").find("input[type=text]").val("");

	}

	};