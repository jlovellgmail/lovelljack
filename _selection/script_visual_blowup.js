


// enlarge images
var scrollPos = 0;
function blowup(s){

	d3.select(".pageBody")
		.append("div").attr("class", "blowup")
		.append("div").attr("class", "blowupimagecontainer")
		.append("div").attr("class", "blowupImage")
		.attr("data-src", s)
		.style("background-image", "url("+s+")")
		;

	$(".blowupimagecontainer").css("max-width", "");

	d3.select(".blowup")
		.append("div").attr("class", "x")
		;
	$(".blowup .x").click(exitBlowup);


	setBlowupViewKeys();



	// click anywhere exits blowup
	// $(".blowup").click(exitBlowup);
	// click anywhere goes to next image
	$(".blowup").click(shownextimage);

	


	// stop scroll behind blowup
	scrollPos = $('body').scrollTop();
	$('body').css({
	    overflow: 'hidden'
	    ,position: 'fixed'
	    ,top : -scrollPos
	    // ,width: "100%"
	});
}
function exitBlowup(){
	d3.select(".blowup").remove();
	

	// not used on visual page
	//setPageViewKeys();
	
	// reenable scroll
	$('body').css({
	    overflow: '',
	    position: '',
	    top: '',
	    width: ""
	}).scrollTop(scrollPos);
}




function setBlowupViewKeys(){
	$("body").off("keydown");
	$("body").keydown(function(e) {
		if(e.keyCode == 37) { // left
			var list = $(".pageContent img")
				.map(function() {
					return this.src;
				})
			.get();
			var i = list.findIndex(function(d){
				return d == $(".blowupImage").attr("data-src");
			});
			i -= 1;
			if(i < 0) i = list.length - 1;
			$(".blowupImage")
			.css("background-image", "url("+list[i]+")")
				.attr("data-src", list[i])
				;
		}
		else if(e.keyCode == 39) { // right			
			shownextimage();
		}
		else if (e.keyCode == 27) { // escape
		    exitBlowup();
		}
	});
}


function shownextimage(){
	var list = $(".pageContent img")
		.map(function() {
			return this.src;
		})
	.get();
	var i = list.findIndex(function(d){
		return d == $(".blowupImage").attr("data-src");
	});
	i = (i+1) % list.length;
	$(".blowupImage")
		.css("background-image", "url("+list[i]+")")
		.attr("data-src", list[i])
		;
}







