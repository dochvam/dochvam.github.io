var faded = false;

highlight_present = function () {
	if ($(".bluemarker").hasClass("blue")) $(".bluemarker").removeClass("blue");
	else $(".bluemarker").addClass("blue");
};

initial_slide = function () {
	$(".right-half").addClass("new-item");
	$(".boundary").addClass("bound-width")
};

fade_in_title = function () {
	$(".name").addClass("fade-text");
	$(".subname").addClass("fade-text");
	$(".datelink").addClass("fade-text");

};

$(document).ready(function()
{
  //hide the all of the element with class msg_body
  $(".msg_body").hide();
  //toggle the componenet with class msg_body
  $(".msg_head").click(function()
  {
    $(this).next(".msg_body").slideToggle(600);
  });
});

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