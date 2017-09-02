$(document).ready(function(){

function getHeight() {
	var headheight = $('.custom-header').outerHeight();
	$('.section1').css('padding-top', headheight);
}

getHeight();

$(window).resize(function(){
	getHeight();
});

$(window).scroll(function(){
		if($(document).scrollTop() > 100) {
			$('body').addClass('sticky');
		}
		else{
			$('body').removeClass('sticky');
	}
});

$('a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


});