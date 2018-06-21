$(document).ready(function(){
	menu()
});



// create menu
function menu() {
	var wrap = d3.select(".menu")
		.append("div").attr("class", "wrap")
		;
	wrap
		.append("div").attr("class", "name tk-aktiv-grotesk")
		.append("a").attr("href", "/")
		.text("Jack Lovell")
		;
	var menuitems = 
		wrap.append("div").attr("class", "menuitem tk-aktiv-grotesk")
		;
	menuitems
		.append("a").attr("href", "/")
		.text("home")
		;
	menuitems
		.append("a").attr("href", "contact.html").attr("class", "notfirst")
		.text("contact")
		;
}

















