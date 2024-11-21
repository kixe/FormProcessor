
jQuery(document).ready(function() {
	/*
	// instantiate the WireTabs
	$('.FormProcessor > .Inputfields').WireTabs({ // tabs will be prepended to #element
	    items: $('.WireTab'), // items that it should tab (REQUIRED)
	    rememberTabs: true, // whether it should remember current tab across requests
	    skipRememberTabIDs: ['DeleteTab'], // array of tab IDs it should not remember between requests
	    // id: 'PageEditTabs', // id attribute for generated tabbed navigation (optional)
	    itemsParent: null, // parent element for items (better to omit when possible)
	    cookieName: 'WireTab', // Name of cookie it uses to remember tabs
	});
	*/
	// confirm dialog
	$('.FormProcessor.InputfieldFormConfirm').on('submit', function() {
		var msg = $(this).attr('data-confirm');
		if(confirm(msg)) {
			return true;
		}
		return false;
	});
});