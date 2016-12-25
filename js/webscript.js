
highlight_present = function () {
	if ($(".bluemarker").hasClass("blue")) $(".bluemarker").removeClass("blue");
	else $(".bluemarker").addClass("blue");
};
initial_slide = function () {
	$("right-half").addClass("giveWidth");
};