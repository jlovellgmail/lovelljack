cout = console.log;
var pagename = "project.html";
var keyname = "project";
var pi = undefined;
var th_folder = "images/";
var datafile = "http://lovelljack.com/lovelljack_test/data.js";



// get data
var data;
getdata();
function getdata(){
	if(!window.data){
		
		// for local testing
		$.getScript(datafile, function()

		{
		    // script is now loaded and executed.
		    data = window.data;
		    $(document).ready(readyhandler);
		});
	}
	else {
		data = window.data;
		$(document).ready(readyhandler);
	}
}


function readyhandler(){
	
	// get project index from query string
	pi = getProjectIndex();
	
	// set keys
	setPageViewKeys();

	// build page layout
	populate();

}



// enlarge images
var scrollPos = 0;
function blowup(s, title, caption){

	/*
	d3.select(".pageBody")
		.append("div").attr("class", "blowup")
		.append("div").attr("class", "blowupImage")
		.attr("data-src", s)
		.style("background-image", "url("+s+")")
		;
	setBlowupViewKeys();
	*/
	//
	// drawings site
	// var title = "title2";
	// var caption = "caption2";
	d3.select(".pageBody")
		.append("div").attr("class", "wpr")
		.append("figure")
		.append("img").attr("src", s)
	d3.select("figure")
		.append("figcaption")
		.append("span").attr("class", "figtitle")
		.text(title)
		;
	d3.select("figcaption")
		.append("span")
		.text(caption)
		;

		console.log(caption);
	// stop scroll behind blowup
	scrollPos = $('body').scrollTop();
	$('body').css({
	    overflow: 'hidden',
	    position: 'fixed',
	    top : -scrollPos,
	    width: "100%"
	});
	// click anywhere exits blowup
	$(".wpr").click(exitBlowup);



}
function exitBlowup(){


	/*
	d3.select(".blowup").remove();
	setPageViewKeys();
	// reenable scroll
	$('body').css({
	    overflow: '',
	    position: '',
	    top: '',
	    width: ""
	}).scrollTop(scrollPos);
	*/
	//
	// darwings site
	d3.select(".wpr").remove();
	setPageViewKeys();
	// reenable scroll
	$('body').css({
	    overflow: '',
	    position: '',
	    top: '',
	    width: ""
	}).scrollTop(scrollPos);


}




// ...
function getProjectIndex(){


	/*
	// get query string
	var queries = {};
	$.each(document.location.search.substr(1).split('&'),function(c,q){
	  var i = q.split('=');
	  queries[i[0].toString()] = i[1].toString();
	});

	// get index of query string in data
	var i = data.findIndex(function(d){
		return d.query == queries.project;
	});
	return i;
	*/
	// for drawings site
	return 0;

}
function getpreviousindex(){
	var newindex = pi - 1;
	if(newindex < 0) newindex = data.length - 1;
	else newindex %= data.length;
	return newindex;	
}
function getnextindex(){
	var newindex = (pi+1) % data.length;
	return newindex;
}
function goleft(){
	window.location = pagename+"?"+keyname+"="+data[getpreviousindex()].query;
}
function goright(){
	window.location = pagename+"?"+keyname+"="+data[getnextindex()].query;
}
function getpreviousblurb(){
	return data[getpreviousindex()].blurb;
}
function getnextblurb(){
	return data[getnextindex()].blurb;
}



function setPageViewKeys(){
	$("body").off("keydown");
	$("body").keydown(function(e) {
		if(e.keyCode == 37) { // left
			goleft();
		}
		else if(e.keyCode == 39) { // right
			goright();
		}
		else if (e.keyCode == 27) { // escape
		    // window.location = "/";
		}
	});
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
		else if (e.keyCode == 27) { // escape
		    exitBlowup();
		}
	});
}




function populate() {

	// populate page based on query string
	var item = data[pi];

	
	/*
	d3.select(".pageContent")
		.append("div").attr("class", "title museo")
		.text(item.title)
		;
	d3.select(".pageContent")
		.append("div").attr("class", "subtitle")
		.text(item.subtitle)
		;
	*/


	d3.select(".pageContent")
		.append("div").attr("class", "itemContent")
		.html(item.content)
		;

	
	/*
	// special width for emails page
	if(item.query == "emailmarketing"){
		$(".pageContent").addClass("emailmarketing")
	}
	*/



	// previous, next, escape
	function getsplitwords(s){
		var threshold = 13;
		if(s.length < threshold){
			return s;
		}
		else {
			return s.split(" ").join("<br>")
		}
	}
	d3.select(".goleft .cell")
		.append("div").attr("class", "arrowcontainer tk-aktiv-grotesk")
		;
	// arrow first then text
	d3.select(".goleft .cell .arrowcontainer")
		.append("div").attr("class", "arrow")
		.append("div").attr("class", "image")

		;
	d3.select(".goleft .cell .arrowcontainer")
		.append("div").attr("class", "text")
		.html(getsplitwords(getpreviousblurb()))
		;
	// text then arrow
	d3.select(".goright .cell")
		.append("div").attr("class", "arrowcontainer tk-aktiv-grotesk")
		.append("div").attr("class", "text")
		.html(getsplitwords(getnextblurb()))
		;
	d3.select(".goright .cell .arrowcontainer")
		.append("div").attr("class", "arrow")
		.append("div").attr("class", "image")
		;



	$(".goleft .arrowcontainer").mouseover(function(){
		$(this).addClass("rollover");
	});
	$(".goright .arrowcontainer").mouseover(function(){
		$(this).addClass("rollover");
	});
	$(".goleft .arrowcontainer, .goright .arrowcontainer").mouseout(function(){
		$(this).removeClass("rollover");
	});
	$(".goleft .arrowcontainer").click(goleft);
	$(".goright .arrowcontainer").click(goright);



	/*
	// stop flicker in menu arrows
	var imageloader = new Image();
	imageloader.onload = function () {
	   $(".menu").css("opacity", "1");
	}
	imageloader.src = th_folder + "arrow_white_fill.png";
	*/



	// create menu
	var wrap = d3.select(".menu")
		.append("div").attr("class", "wrap")
		;
	wrap
		.append("div").attr("class", "name tk-aktiv-grotesk")
		.append("a").attr("href", "/")
		.text("Jack Lovell")
		;



}

















