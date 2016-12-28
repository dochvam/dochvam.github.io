var faded = false;

highlight_present = function () {
	if ($(".bluemarker").hasClass("blue")) $(".bluemarker").removeClass("blue");
	else $(".bluemarker").addClass("blue");
};

initial_slide = function () {
	$(".right-half").addClass("new-item");
};

fade_in_title = function () {
	$(".name").addClass("fade-text");
	$(".subname").addClass("fade-text");
	$(".datelink").addClass("fade-text");

};



// $(document).ready(function(){
//     $("button").click(function(){
//         $(".right-half").animate({
//             width: 'toggle'
//         });
//     });
// });


sleep = function(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}