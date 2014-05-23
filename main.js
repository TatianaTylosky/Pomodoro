$(document).ready(function(){
	// SOME EVENT LISTENER
	$(".add").mousedown(function(){

	var activity = $( "#activity" ).val();
	var minutes = $( "#minutes" ).val();

	

	$("table.list").append("<div></div>");

	$("table.list > div").last().addClass("newitem");

	$("div.newitem").last().append("<tr></tr>");

	$("div.newitem > tr").last().hide().append('<img class="delete" position="relative" top="5px" width="50px"src="delete.png" />').fadeIn("slow");

	$("table.list > div > tr").last().append("<td></td>");
	$("table.list > div > tr > td").addClass("data");
	$("table.list > div > tr > td").last().hide().fadeIn("slow").append(activity);

	// $("table.list > div.newitem").children('td:last').append(activity);

	$("table.list > div > tr").last().append("<td></td>");
	$("table.list > div > tr > td").addClass("data");
	$("table.list > div > tr > td").last().hide().append(minutes).fadeIn("slow");

	// $("table.list > div.newitem").children('td:last').append(minutes);

	// alert("it sort of worked?");

	});
	
	// $(".container").shake();
	


	// $(".color_picker").mouseover(function(){
	// 	$(".color_table").show();
	// });

	// $(".color_table").moveoff(function(){
	// 	$(this).hide();
	// });
});