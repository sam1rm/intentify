$(document).ready(function() {
	var storedHref = window.location.href;
	if (window.location.href.indexOf("facebook") != -1) {
	    window.setInterval(function() {
		    if (window.location.href != storedHref) {
			storedHref = window.location.href;
			if (storedHref.indexOf("photo.php") != -1) {
			    var photoUrl = $(".spotlight").attr("src");
			    $("a:contains('Share')").click(function() {
				    var intent = new WebKitIntent("http://webintents.org/share", "text/uri-list", photoUrl);
				    window.navigator.webkitStartActivity(intent);
				    return false;
				});
			}
		    }
		}, 100);
	}
		
    });
