 faded = false;
 environmental_alive = false;
 csc_alive = false;
 philosophy_alive = false;
 leadership_alive = false;

highlight_present = function () {
	if ($(".bluemarker").hasClass("blue")) $(".bluemarker").removeClass("blue");
	else $(".bluemarker").addClass("blue");
};

initial_slide = function () {
	$(".right-half").addClass("new-item");
	$(".boundary").addClass("bound-width");
  fade_in_subs();
};

fade_in_title = function () {
	$(".name").addClass("fade-text");
}

fade_in_subs = function () {
  $(".subname").addClass("fade-text");
  $(".datelink").addClass("fade-text");
  $(".category").addClass("fade-text");
}

activate_environmental = function () {
  if (csc_alive == true) { 
    activate_csc(); 
  }
  if (philosophy_alive == true) { 
    activate_philosophy(); 
  }
  if (leadership_alive == true) {
    activate_leadership();
  }

  environmental_alive = ! environmental_alive;

  $(".environmental-link").toggleClass("fade-text");
  $(".environmental").toggleClass("environmental-active");
  $(".contains-environmental").slideToggle(600);
}

activate_csc = function () {
  if (environmental_alive == true) { 
    activate_environmental(); 
  }
  if (philosophy_alive == true) { 
    activate_philosophy(); 
  }
  if (leadership_alive == true) {
    activate_leadership();
  }

  csc_alive = !csc_alive;

  $(".csc-link").toggleClass("fade-text");
  $(".csc").toggleClass("csc-active");
  $(".contains-csc").slideToggle(600);
}

activate_philosophy = function () {
  if (environmental_alive == true) { 
    activate_environmental();
  }
  if (csc_alive == true) { 
    activate_csc();
  }
  if (leadership_alive == true) {
    activate_leadership();
  }

  philosophy_alive = !philosophy_alive;

  $(".philosophy-link").toggleClass("fade-text");
  $(".philosophy").toggleClass("philosophy-active");
  $(".contains-philosophy").slideToggle(600);
}

activate_leadership = function () {
  if (environmental_alive == true) { 
    activate_environmental();
  }
  if (csc_alive == true) { 
    activate_csc();
  }
  if (philosophy_alive == true) { 
    activate_philosophy(); 
  }

  leadership_alive = !leadership_alive;

  $(".leadership-link").toggleClass("fade-text");
  $(".leadership").toggleClass("leadership-active");
  $(".contains-leadership").slideToggle(600);
}


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



sleep = function(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}