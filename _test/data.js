var data = [];
window.data = data;
makedata();
function makedata(){

	// html content for pages
	var contentlist = {};
	make_content_list();
	function make_content_list(){
		function img(s, classes, style, title, trailer){
			if(!classes) return  "<img src='"+s+"' onclick='blowup(this.src, this.title, this.attr(\"trailer\") )'>";
			else if(!style) return "<img class='"+classes+"' src='"+s+"' onclick='blowup(this.src, this.title, this.attr(\"trailer\") )'>";
			else if(!title) return "<img class='"+classes+"' style='"+style+"' src='"+s+"' onclick='blowup(this.src, this.title, this.attr(\"trailer\") )'>";
			else return "<img class='"+classes+"' style='"+style+"' title='"+title+"' trailer='"+trailer+"' src='"+s+"' onclick='blowup(this.src, this.title, this.attr(\"trailer\") )'>";
		}
		function text(s, classes, style){
			if(!classes) return  "<p>"+s+"</p>";
			else if(!style) return "<p class='"+classes+"'>"+s+"</p>";
			else return "<p class='"+classes+"' style='"+style+"'>"+s+"</p>";
		}
		function caption(s){
			return text(s, "caption");
		}
		function div(classes, contents){
			if(!contents) return "<div class='"+classes+"'></div>";
			else return "<div class='"+classes+"'>"+contents+"</div>";
		}
		var spacer = div("spacer");
		var spacermedium = div("spacermedium");
		var spacersmall = div("spacersmall");
		var spacerextrasmall = div("spacerextrasmall");
		var image_folder = "images/page_images/";

		/*
		contentlist.drawings = ""



			+ img(image_folder + "Flowers_1500.jpg", " ", " ", "Flowers", "2017, colored pencil on paper, 21.1 x 19.4 in.")
			+ spacer
			+ img(image_folder + "Bent_Shape_1000.jpg")
			+ spacer
			+ img(image_folder + "torso_900.jpg")



			;

		*/

		var newlist = [
			{
				image_folder + "Flowers_1500.jpg"
				title: "Flowers",
				caption: "2017, colored pencil on paper, 21.1 x 19.4 in." 
			}
			,{
				image_folder + "Bent_Shape_1000.jpg"
				title: "Bent Shape",
				caption: "2008, charcoal on paper, 23 x 31 in." 
			}
			,{
				image_folder + "torso_900.jpg"
				title: "Torso",
				caption: "2016, ink and graphite on paper, 22 x 21 in." 
			}
		];
		contentlist.drawings = "";
		newlist.forEach(function(item){
			var s = item.s;
			var title = item.title;
			var caption = item.caption;
			
			var onclickstring = " onclick='blowup("+s+", "+title+", "+caption+")' ";
			var srcstring = " src='"+s+"' ";
			var captionstring = " caption='"+caption+"' ";
			var titlestring = " caption='"+title+"' ";
			contentlist.drawings += "<img"+titlestring+captionstring+sourcestring+onclickstring+">";
		});


	}

	// create list of items
	make_items_list();
	function make_items_list(){
		function add(image, blurb, query, title, subtitle, content){
			var object = {
				image: image
				,blurb: blurb
				,query: query
				,title: title
				,subtitle: subtitle
				,content: content
			}
			data.push(object);
		}
		//------------------------------------
		add(
			"th_itsfinallyhere.jpg"
			,"Digital Marketing Campaigns"
			,"emailmarketing"
			,"Digital Marketing Campaigns"
			,""
			,contentlist.drawings
		);
	}

}
