var mainTimeline = new timeline();
var currentTimeNodeIndex = 0;
var currentChoiceNodeIndex = 0;
var currentChoices = [1,1,1,1];

/*************************** init / let's get started *****************************/
function initMain(){
	mainTimeline.visual();
	fillTimeNodesWithData();
	fillChoiceNodesWithData();
	//change background every couple of seconds
	/*var bgs = [
		"landscape_winter.png",
		"landscape_summer.png"
	]
	var current = 0;

	function changeBg(){
		document.getElementById("mainBg").src = bgs[current];
		bgs[current = ++current % bgs.length];
	}
	setInterval(changeBg, 5000);
*/
	//default settings
	document.getElementById("profile").style.visibility = "hidden";
	document.getElementById("relationships").style.visibility = "hidden";
	document.getElementById("choiceChannelChoices").style.visibility = "hidden";
	document.getElementById("lectureContentImg").style.visibility = "hidden";

}

function resetRedChanges(){
	document.getElementById("relationship1").style.color = "";
	document.getElementById("relationship2").style.color = "";
	document.getElementById("personLocation").style.color = "";
	document.getElementById("personOccupation").style.color = "";
}



/* onClick responses */
function onClickTimeNode(index){
	resetRedChanges();

	var instructions = document.getElementById("instructions");
	if(instructions != null){
		instructions.parentNode.removeChild(instructions);
	}

	document.getElementById("profile").style.visibility = "visible";
	document.getElementById("relationships").style.visibility = "visible";
	currentTimeNodeIndex = index;

	//make sure all vertical lines aren't selected before selecting a new one
	var imgs = document.getElementsByClassName("timelineTimeNode");
	for (var i = 0; i < timeNodes.length; i++)
	{
		imgs[i].nextSibling.src = "verticalLine.png";
	}
	var timeNode = document.getElementById("topImg"+index);
	timeNode.nextSibling.src = "verticalLineSelected.png";

	//need to deselect the choice nodes as well
	var imgs = document.getElementsByClassName("timelineChoiceNode");
	for (var i = 0; i < choiceNodes.length; i++)
	{
		imgs[i].nextSibling.src = "verticalLine.png";
	}

	var lifeEventText = document.getElementById("lifeEventText");
	lifeEventText.innerHTML = timeNodesLifeEventText[index];
	//life event img
	var lectureContentText = document.getElementById("lectureContentText");
	lectureContentText.innerHTML = timeNodesLectureContentText[index];
	if (index == 0)
	{
		document.getElementById("lectureContentImg").style.visibility = "visible";
	}
	else
	{
		document.getElementById("lectureContentImg").style.visibility = "hidden";
	}
	//lecture content img
	var profileAge = document.getElementById("personAge");
	profileAge.innerHTML = timeNodesProfileAge[index];

	var profileLocation = document.getElementById("personLocation");
	profileLocation.innerHTML = timeNodesProfileLocation[index];

	var profileOccupation = document.getElementById("personOccupation");
	profileOccupation.innerHTML = timeNodesProfileOccupation[index];

	var relationshipName1 = document.getElementById("relationship1");
	relationshipName1.innerHTML = timeNodesRelationships[index][0];
	var relationshipName2 = document.getElementById("relationship2");
	relationshipName2.innerHTML = timeNodesRelationships[index][1];
	var relationshipName3 = document.getElementById("relationship3");
	relationshipName3.innerHTML = timeNodesRelationships[index][2];

	var relationshipImg1 = document.getElementById("relationshipImg1");
	relationshipImg1.src = timeNodesRelationshipImgs[index][0];
	var relationshipImg2 = document.getElementById("relationshipImg2");
	relationshipImg2.src = timeNodesRelationshipImgs[index][1];
	var relationshipImg3 = document.getElementById("relationshipImg3");
	relationshipImg3.src = timeNodesRelationshipImgs[index][2];


	//make sure all life choices are possible before hiding the ones that cannot be 
	for(var i = choiceNodes.length-1; i>=0; i--){
		var img = "img" + (i);
		var choicesNotMadeYet = document.getElementById(img);
		choicesNotMadeYet.style.visibility = "visible";
		var verticalLinesOfChoice = choicesNotMadeYet.nextSibling;
		verticalLinesOfChoice.style.visibility = "visible";
	}

	//hide life choices that haven't been made yet
	for(var i = choiceNodes.length-1; i>=currentTimeNodeIndex; i--){
		var img = "img" + (i);
		var choicesNotMadeYet = document.getElementById(img);
		var verticalLinesOfChoice = choicesNotMadeYet.nextSibling;
		verticalLinesOfChoice.style.visibility = "hidden";
		choicesNotMadeYet.style.visibility = "hidden";
	}

	if(index == 0){
		var choiceChannelText = document.getElementById("choiceChannelText");
		choiceChannelText.innerHTML = "Sorry, you can't make any life choices right now. Try moving to a different time node.";

		var radioButton = document.getElementById("choiceChannelChoices");
		radioButton.style.visibility = "hidden";
	}
	else{
		var choiceChannelText = document.getElementById("choiceChannelText");
		choiceChannelText.innerHTML = "Click on a choice node.";

		var radioButton = document.getElementById("choiceChannelChoices");
		radioButton.style.visibility = "hidden";

	}

	//change bg
	var bgPic = document.getElementById("mainBg");
	if (bgPic.src == "http://students.cse.tamu.edu/peachers/essaySketch/newMain/landscape_winter.png")
	{
		document.getElementById("mainBg").src = "http://students.cse.tamu.edu/peachers/essaySketch/newMain/landscape_summer.png";
	}
	else
	{
		document.getElementById("mainBg").src = "http://students.cse.tamu.edu/peachers/essaySketch/newMain/landscape_winter.png";
	}
}

function onClickChoiceNode(index){
	currentChoiceNodeIndex = index;

	//make sure all vertical lines aren't selected before selecting a new one
	var imgs = document.getElementsByClassName("timelineChoiceNode");
	for (var i = 0; i < choiceNodes.length; i++)
	{
		imgs[i].nextSibling.src = "verticalLine.png";
	}

	//highlight the vertical line that is currently selected
	var choiceNode = document.getElementById("img"+index);
	choiceNode.nextSibling.src = "verticalLineSelected.png";

	//show the radio button
	var radioButton = document.getElementById("choiceChannelChoices");
	radioButton.style.visibility = "visible";

	//change the choice text
	var choiceChannelText = document.getElementById("choiceChannelText");
	choiceChannelText.innerHTML = choiceNodesText[index];

	var choice1 = document.getElementById("choice1");
	choice1.innerHTML = choiceNodesChoice1Text[index];

	var radioButtonOfChoice1 = choice1.previousSibling;

	var choice2 = document.getElementById("choice2");
	choice2.innerHTML = choiceNodesChoice2Text[index];

	var radioButtonOfChoice2 = choice2.previousSibling;

	//make sure the radio button checks the correct choice
	var choice = currentChoices[currentChoiceNodeIndex];
	document.getElementById('rB1').checked = false;
	document.getElementById('rB2').checked = false;

	if(choice == 1){
		document.getElementById('rB1').checked = true;
	}
	else{
		document.getElementById('rB2').checked = true;
	}
}


function onClickChoiceRadioButton(obj){
	
	var choice = parseInt (obj.value);
	currentChoices[currentChoiceNodeIndex] = choice;

	choiceNodes[currentChoiceNodeIndex].update(currentChoiceNodeIndex, choice);
	choiceNodes[currentChoiceNodeIndex].showChanges();

}



