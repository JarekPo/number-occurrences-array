/*Create an application that generates an array of 5 random numbers 1-10. 
The user should then guess a number and the app will tell them how many time that number exists within the array.*/

var userNum;
var randomNums=[];
var occurrences;

function randomNumbers(){
	for(i=0;i<5;i++){
		randomNums[i]=Math.floor(Math.random()*10)+1;
	}
}
function userNumber(){
	document.getElementById("enterNumBtn").style.display="none";
	userNum=parseInt(prompt("Enter the number (1-10)"));
	checkOccurrences();
	displayOccurrences();
}
function checkOccurrences(){
	occurrences=0;
	for(i=0;i<randomNums.length;i++){
		if(userNum==randomNums[i]){
			occurrences++;
		}
	}
}
function displayOccurrences(){
	document.getElementById("displayResult").innerHTML="You entered number "+userNum+". <br />It occurres in the computer's array "+occurrences+" times";
}
function displayArray(){
	document.getElementById("showArray").innerHTML="Numbers in the array: "+randomNums.toString();
	document.getElementById("showArrBtn").style.display="none";
}
