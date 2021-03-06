/**
	* Hide Sidebar When Scrolling Page
	* By Fm Web (Recouse)
	* http://fm-web.studio
*/

$(document).ready(function() {
	var fmwContent  = 'body[data-pageapp="forums"] #ipsLayout_mainArea';
	var fmwSidebar  = 'body[data-pageapp="forums"] #ipsLayout_sidebar';
	var fmwHeight = $('body[data-pageapp="forums"] #ipsLayout_sidebar .cWidgetContainer').height();
	
	if($(window).width() > 1200){
		$(window).scroll(function() {
			if ($(this).scrollTop() > fmwHeight) {
				$(fmwSidebar).stop(true).fadeOut(200, function() {
					$(fmwContent).stop(true).animate(200);
				});
			} else {
				$(fmwContent).stop(true).animate(200, function() {
					$(fmwSidebar).stop(true).fadeIn(200);
				});
			}
		});
	}
});