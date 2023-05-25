//create connection

console.log("Start")

var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/user").build();

//connect to methods that hub invokes aka recive notification from hub
connectionUserCount.on("updateTotalViews", (value) => {
	var newCountSpan = document.getElementById("totalViewsCounter");
	newCountSpan.innerText = value;
	toastr.info('aeeeeeeeeeeeeeeeeeeeeee')
})

//invoke hub methods aka send notification to hub 
function newWindowLoadedOnClient() {
	connectionUserCount.send("NewWindowLoaded");
}

//start connection
function fullfilled() {
	// do something on start
	newWindowLoadedOnClient();
}

function rejected() {
	//rejected logs
	console.log("Rejected")
}

connectionUserCount.start().then(fullfilled, rejected);

