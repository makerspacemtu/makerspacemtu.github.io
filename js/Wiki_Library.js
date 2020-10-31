var isOpen = true;
function checkClick(){
	console.log("Clicked!");
}

function wikiDropDown(){
	document.getElementById("wikiDropDown").classList.toggle("show");
	
	if( isOpen == true ) {
		document.getElementById("archiveArrowDropDown").style.transform = "rotate(45deg)";
		isOpen = false;
	} else {
		document.getElementById("archiveArrowDropDown").style.transform = "rotate(-45deg)";
		isOpen = true;
	}
}