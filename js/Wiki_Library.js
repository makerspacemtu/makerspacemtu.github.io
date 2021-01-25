/*
/ Purpose
/
/
/
/
/
*/
var loaded = false;
function loadLibrary(){
	loaded = true;
	var apiKey = "AIzaSyBMDQIYbnUUkJy7ovs1KTc-T4RgzTnUM2g";
	/*Load WoodWorking videos*/
	var woodworkingID = "PLwk8zcK5HMt0Vn0WauJWvNEiT1xyuHKNn";
            var requestOptions = {
                playlistId: woodworkingID,
                part: 'snippet',
                maxResults: 50
            };
            gapi.client.setApiKey(apiKey);
            gapi.client.load('youtube','v3', function () {  
				var request = gapi.client.youtube.playlistItems.list({
					"part": [
						"snippet"
							],
							"maxResults": 50,
							"playlistId": "PLwk8zcK5HMt2tBK5xb-2AJOVYihroB-Im"
				});
                request.execute(function (data) {
					for(i = 0; i < data.items.length; i++){
						var iframe = document.createElement("iframe");
						iframe.src = "https://www.youtube.com/embed/" + data.items[i].snippet.resourceId.videoId;
						iframe.width = "320";
						iframe.height="215";
						iframe.class="column";
						iframe.loading="lazy";
						iframe.frameborder="0";
						iframe.setAttribute('allowFullScreen', '')
						var container = document.getElementById("WWDisplay");
						container.appendChild(iframe);
						if(i == 49){
							break;
						}
					}
				});
            });
	/*Load crafting videos*/
	var craftingID = "PLwk8zcK5HMt2pl_iM6pla-7OXS3M5EMkC";
            var requestOptions = {
                playlistId: craftingID,
                part: 'snippet',
                maxResults: 50
            };
            gapi.client.setApiKey(apiKey);
            gapi.client.load('youtube','v3', function () {  
				var request = gapi.client.youtube.playlistItems.list({
					"part": [
						"snippet"
							],
							"maxResults": 50,
							"playlistId": "PLwk8zcK5HMt2pl_iM6pla-7OXS3M5EMkC"
				});
                request.execute(function (data) {
					for(i = 0; i < data.items.length; i++){
						var iframe = document.createElement("iframe");
						iframe.src = "https://www.youtube.com/embed/" + data.items[i].snippet.resourceId.videoId;
						iframe.width = "320";
						iframe.height="215";
						iframe.class="column";
						iframe.loading="lazy";
						iframe.frameborder="0";
						iframe.setAttribute('allowFullScreen', '')
						var container = document.getElementById("CraftingDisplay");
						container.appendChild(iframe);
						if(i == 49){
							break;
						}
					}
				});
            });
	/*Load 3dPrinting videos*/
	var printingID = "PLwk8zcK5HMt0gBAcIt7dMsb3e6iaOWQeZ";
            var requestOptions = {
                playlistId: printingID,
                part: 'snippet',
                maxResults: 50
            };
            gapi.client.setApiKey(apiKey);
            gapi.client.load('youtube','v3', function () {  
				var request = gapi.client.youtube.playlistItems.list({
					"part": [
						"snippet"
							],
							"maxResults": 50,
							"playlistId": "PLwk8zcK5HMt0gBAcIt7dMsb3e6iaOWQeZ"
				});
                request.execute(function (data) {
					for(i = 0; i < data.items.length; i++){
						var iframe = document.createElement("iframe");
						iframe.src = "https://www.youtube.com/embed/" + data.items[i].snippet.resourceId.videoId;
						iframe.width = "320";
						iframe.height="215";
						iframe.class="column";
						iframe.loading="lazy";
						iframe.frameborder="0";
						iframe.setAttribute('allowFullScreen', '')
						var container = document.getElementById("PrintingDisplay");
						container.appendChild(iframe);
						if(i == 49){
							break;
						}
					}
				});
            });
	/*Load Electronics videos*/
	var electronicsID = "PLwk8zcK5HMt1VdH68QdmnInm9yL355GQV";
            var requestOptions = {
                playlistId: electronicsID,
                part: 'snippet',
                maxResults: 50
            };
            gapi.client.setApiKey(apiKey);
            gapi.client.load('youtube','v3', function () {  
				var request = gapi.client.youtube.playlistItems.list({
					"part": [
						"snippet"
							],
							"maxResults": 50,
							"playlistId": "PLwk8zcK5HMt1VdH68QdmnInm9yL355GQV"
				});
                request.execute(function (data) {
					for(i = 0; i < data.items.length; i++){
						var iframe = document.createElement("iframe");
						iframe.src = "https://www.youtube.com/embed/" + data.items[i].snippet.resourceId.videoId;
						iframe.width = "320";
						iframe.height="215";
						iframe.class="column";
						iframe.loading="lazy";
						iframe.frameborder="0";
						iframe.setAttribute('allowFullScreen', '')
						var container = document.getElementById("ElectronicsDisplay");
						container.appendChild(iframe);
						if(i == 49){
							break;
						}
					}
				});
            });
}



var isOpen = true;
var isOpenWW = true;
var isOpenC = true;
var isOpenP = true;
var isOpenE = true;

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

function wikiDropDownWoodWorking(){
	document.getElementById("WoodWorkingDropDown").classList.toggle("show");
	if(loaded != true){
		loadLibrary();
	}
	if( isOpenWW == true ) {
		document.getElementById("WoodWorkingArrowDropDown").style.transform = "rotate(45deg)";
		isOpenWW = false;
	} else {
		document.getElementById("WoodWorkingArrowDropDown").style.transform = "rotate(-45deg)";
		isOpenWW = true;
	}
}

function wikiDropDownCrafting(){
	document.getElementById("CraftingDropDown").classList.toggle("show");
	if(loaded != true){
		loadLibrary();
	}
	if( isOpenC == true ) {
		document.getElementById("CraftingArrowDropDown").style.transform = "rotate(45deg)";
		isOpenC = false;
	} else {
		document.getElementById("CraftingArrowDropDown").style.transform = "rotate(-45deg)";
		isOpenC = true;
	}
}

function wikiDropDownPrinting(){
	document.getElementById("PrintingDropDown").classList.toggle("show");
	if(loaded != true){
		loadLibrary();
	}
	if( isOpenP == true ) {
		document.getElementById("PrintingArrowDropDown").style.transform = "rotate(45deg)";
		isOpenP = false;
	} else {
		document.getElementById("PrintingArrowDropDown").style.transform = "rotate(-45deg)";
		isOpenP = true;
	}
}

function wikiDropDownElectronics(){
	document.getElementById("ElectronicsDropDown").classList.toggle("show");
	if(loaded != true){
		loadLibrary();
	}
	if( isOpenE == true ) {
		document.getElementById("ElectronicsArrowDropDown").style.transform = "rotate(45deg)";
		isOpenE = false;
	} else {
		document.getElementById("ElectronicsArrowDropDown").style.transform = "rotate(-45deg)";
		isOpenE = true;
	}
}