//Switch light/dark
	
$(".switch").on('click', function () {
    if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $(".switch").removeClass("switched");
    }
    else {
        $("body").addClass("light");
        $(".switch").addClass("switched");
    }
});