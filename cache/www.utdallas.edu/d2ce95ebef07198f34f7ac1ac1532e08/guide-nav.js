<!-- Automatically Create Links and Hide/Show Guides -->
/*
Before the body starts loading, let's add a css rule to hide the guides.
We want to do this in javascript, so that it won't happen (the guides will remain visible) if the user doesn't have script support.
And we want to do it above the body, so that the user won't see the guides for an instant before this change takes place.
*/
document.write("<style type='text/css'> .guide { display: none; } </style>");

//The rest of the setup stuff can take place after the rest of the document has loaded.
$(function() { //jquery shorthand for document ready
	setupJumpLinks();
	$('.guidestart').show(); //Why didn't I show this when I hid the guides above? Because, while it isn't likely to matter, I don't want this to appear until after the jump links are set up, so the page "renders" in order.
});

function setupJumpLinks() {
	if($('.guide-nav') && $('.guide')) { //if we have guide-nav container(s) and guides
		//start the markup with the enclosing ul. It should have a different class if it's holding categories than if it's holding links
		var cont = "<ul class='"+($('.guide-category').length==0 ? 'guide-nav-links' : 'guide-nav-categories') + "'>";
		var inCategory = false;
		$('.guide, .guide-category').each(function() { //for each guide or guide category on the page
			if($(this).hasClass('guide-category')) { //This is a category header.
				//If we're in a category already, close it.
				if(inCategory==true) cont+="</ul></li>";
				//We're in a new category.
				inCategory=true;
				cont+="<li class='category'><span>"+$(this).text()+"</span><ul class='guide-nav-links'>";
				$(this).hide(); //we will never need this visible
			} else {
				//find the h2s within, take the 0th one, put its value in label
				//that won't work if there's no h2, I don't think
				//console.log($(this).find('h2')[0]);
				var h2 = $(this).find('h2');
				var label = (h2.length ? $(h2[0]).text() : "[There's no h2 in this guide!]");
				//get a "slug" derived from the h2 text
				var slug = convertToSlug(label);
				//add an id to this guide to make it possible to reference by name later, in format "guide-[slug]"
				$(this).attr('id','guide-'+slug);
				//add a link in the guide-nav-link markup, with a data parameter - we'll set up its handler later
				cont += "<li><a href='#' data-jump='" + slug + "'>" + label + "</a></li>";
			}
		});
		if(inCategory==true) cont+="</ul></li>"; //end the last category if there was one
		cont += "</ul>"; //end the markup
		//put it in the guide-nav container(s)
		$('.guide-nav').html(cont);
		
		//now let's add a handler for each of the jump-links
		$('.guide-nav').find('a').each(function() {
			$(this).click(function() {
				//if this bit looks familiar, it's basically the same as the filter handling code from the dynamic index
				var $this = $(this);
				// don't proceed if already selected
				if ( $this.hasClass('current') ) {
					return false;
				}
				// "turn off" whatever control is "current" now
				$('.guide-nav').find('.current').removeClass('current');
				// "turn on" this one
				$this.addClass('current');
				
				//Fade out (or slide up) the ones we don't want
				$('.guidestart, .guide').fadeOut(150);
				//Slide down the one we DO want
				$('#guide-' + $this.attr('data-jump')).delay(100).fadeIn(500);

				//Scroll to the guide section.
				$('html, body').animate({
					scrollTop: $("#page-main").offset().top
				}, 1000);
				
				//don't cause the link click to do anything else (e.g. disregard whatever href says to do)
				return false;
			}); //end click handler
		}); //end each .jump-links a
	} //end if .jump-links and .guide
} //end function setupJumpLinks()

function convertToSlug(Text) {
	//http://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
	return Text.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
}