function test(){
	//one click create a new div
	var div=document.createElement("BUTTON");
	var input=document.getElementById("commentButton");
	var deleteButton=document.getElementById("deleteButton");
	input.addEventListener("click",saveData,false);
	deleteButton.addEventListener("click",deleteData,false);
	document.getElementById("commentArt").innerHTML=localStorage.getItem("data");
}
function saveData(){
	//get the data from the element and store it
	var data=document.getElementById("commentInput").value;
	//print it out
	document.getElementById("commentArt").innerHTML+="<br>"+data;
	console.log(data);
	//save the data to the session storage and load it at the start
	//sessionStorage.setItem("data",document.getElementById("commentArt").innerHTML);
	localStorage.setItem("data",document.getElementById("commentArt").innerHTML);
}
function deleteData(){
	console.log("this is triggered");
	//empty data from web storage
	var data="<br><br>";
	localStorage.setItem("data",data);
	//update the screen
	document.getElementById("commentArt").innerHTML=data;
}
window.addEventListener("load",test,false);