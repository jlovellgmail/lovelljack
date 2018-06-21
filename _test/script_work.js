cout = console.log;
var pagename = "project.html";
var keyname = "project";

// get data
var data;
getdata();
function getdata(){
	if(!window.data){
		
		// for local testing
		//$.getScript('data.js', function()
		$.getScript('http://lovelljack.com/lovelljack_test/data.js', function()

		{
		    // script is now loaded and executed.
		    data = window.data;
		    $(document).ready(makeitems);
		});
	}
	else {
		data = window.data;
		$(document).ready(makeitems);
	}
}


function makeitems(){
	// create thumbnails
	var th_folder = "images/";
	var items = 
		d3.select(".workbody .content")
		.selectAll(".item")
		.data(data)
		;
	items = 
		items.enter()
		.append("a").attr("class", "item")
		.attr("href", function(d){ return pagename+"?"+keyname+"="+d.query; })
		;
	var aspect = 
		items
		.append("div").attr("class", "aspect")
		;
	aspect
		.append("div").attr("class", "image")
		.append("img").attr("src", function(d){ return th_folder+d.image; })
		;
	aspect
		.append("div").attr("class", "container-abs")
		.append("div").attr("class", "container-table")
		.append("div").attr("class", "container-cell museo hide")
		.text(function(d){ return d.blurb; })
		;



	
	// dummy item for alignment
	var element = d3.select(".workbody .content");
	element.append("div").attr("class", "item dummy");
	element.append("div").attr("class", "item dummy");
	element.append("div").attr("class", "item dummy");



	$(".item").hover(
		// mouseenter
		function(){
			$(this).find(".container-cell").removeClass("hide");
			$(this).find(".image img").addClass("enlarge");
		},
		// mouseleave
		function(){
			$(this).find(".container-cell").addClass("hide");
			$(this).find(".image img").removeClass("enlarge");
		}
	);



	// create menu
	var wrap = d3.select(".menu")
		.append("div").attr("class", "wrap")
		;
	wrap
		.append("div").attr("class", "name tk-aktiv-grotesk")
		.append("a").attr("href", "/")
		.text("Jack Lovell")
		;
		/*
	wrap
		.append("div").attr("class", "tag tk-aktiv-grotesk")
		.text("Graphic Designer")
		;
		*/


}












