var additem = function () {

	var activity = $( "#activity" ).val();
	var minutes = $( "#minutes" ).val();

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



	};


$(document).ready(function(){
	
	$('.add').click(additem);

	$('img.delete').on('click', function(){
		$(this).closest('div.newitem').remove();
		alert("sdfds");
});
	
	// $(".container").shake();
	


	// $(".color_picker").mouseover(function(){
	//	$(".color_table").show();
	// });

	// $(".color_table").moveoff(function(){
	//	$(this).hide();
	// });
});

