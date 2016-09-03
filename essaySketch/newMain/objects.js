/**************************TIME NODE**************************/

var timeNodes = [new timeNode(), new timeNode(), new timeNode(), new timeNode(), new timeNode()]

/* life event */
function lifeEvent() {
	this.text = "default";
	this.imgSrc = "";
}

/* lecture content */
function lectureContent() {
	this.text = "default";
	this.imgSrc = "";
	this.quote = "default";
}

/* lecture content */
function characterProfile() {
	this.age = "default";
	this.location = "default";
	this.occupation = "default";
}

/* person */
function person(){
	this.imgSrc = "";
	this.name = "default";
}

/* relationships */
function relationships() {
	this.person1 = new person();
	this.person2 = new person();
	this.person3 = new person();
}

/* time node */
function timeNode() {
	this.indexNumber = 0;
	this.lifeEvent = new lifeEvent();
	this.lectureContent = new lectureContent();
	this.characterProfile = new characterProfile();
	this.relationships = new relationships();
}

function fillTimeNodesWithData(){

	for (var i = 0; i < timeNodes.length; i++ )
	{
		var timeNodeObj = timeNodes[i];

		timeNodeObj.indexNumber = i;

		var lifeEventObj = new lifeEvent();
		lifeEvent.text = timeNodesLifeEventText[i];
		this.imgSrc = "some img";

		timeNodeObj.lifeEvent = lifeEventObj;

		var lectureContentObj = new lectureContent();
		lectureContentObj.text = timeNodesLectureContentText[i];
		lectureContentObj.imgSrc = "some img";
		lectureContentObj.quote = "some amazing quote";

		timeNodeObj.lectureContent = lectureContentObj;

		var characterProfileObj = new characterProfile();
		characterProfileObj.age = timeNodesProfileAge[i];
		characterProfileObj.location = timeNodesProfileLocation[i];
		characterProfileObj.occupation = timeNodesProfileOccupation[i];

		timeNodeObj.characterProfile = characterProfileObj;

		var relationshipsObj = new relationships();

		var names = timeNodesRelationships[i];
		var imgs = timeNodesRelationshipImgs[i];
		//three people
		for (var j = 0; j < 3; j++){
			relationshipsObj.person1 = new person();
			relationshipsObj.person1.imgSrc = imgs[j];
			relationshipsObj.person1.name = names[j];
			
			relationshipsObj.person2 = new person();
			relationshipsObj.person1.imgSrc = imgs[j];
			relationshipsObj.person1.name = names[j];

			relationshipsObj.person3 = new person();
			relationshipsObj.person1.imgSrc = imgs[j];
			relationshipsObj.person1.name = names[j];
		}

		timeNodeObj.relationships = relationshipsObj;

	}
}

/**************************CHOICE NODE**************************/
var choiceNodes = [new choiceNode(), new choiceNode(), new choiceNode(), new choiceNode()]

function choiceNode() {
	this.indexNumber = 0;
	this.text = "some text";
	this.choice1 = "some choice1";
	this.choice2 =  "some choice2";
	this.selection = 1;
}

function fillChoiceNodesWithData(){
	for (var i = 0; i < choiceNodes.length; i++ )
	{
		var choiceNodeObj = choiceNodes[i];

		choiceNodeObj.indexNumber = i;

		this.text = choiceNodesText[i];
		this.choice1 = choiceNodesChoice1Text[i];
		this.choice2 =  choiceNodesChoice2Text[i];
	}
}

choiceNode.prototype.update = function(index, choice) {
	this.indexNumber = index;
	this.text = choiceNodesText[index];
	this.choice1 = choiceNodesChoice1Text[index];
	this.choice2 =  choiceNodesChoice2Text[index];
	this.selection = choice;
}

choiceNode.prototype.showChanges = function(){
	var currentChoices = this.indexNumber;
	var choice = this.selection;

	if(currentChoices == 0){
		var data1 = timeNodesRelationships[currentTimeNodeIndex][0];
		var data1img = timeNodesRelationshipImgs[currentTimeNodeIndex][0];
		var data2 = timeNodesRelationships[currentTimeNodeIndex][1];
		var data2img = timeNodesRelationshipImgs[currentTimeNodeIndex][1];


		document.getElementById("relationship1").innerHTML = data2;
		document.getElementById("relationshipImg1").src = data2img;
		document.getElementById("relationship1").style.color = "red";
		timeNodesRelationships[currentTimeNodeIndex][0] = data2;
		timeNodesRelationshipImgs[currentTimeNodeIndex][0] = data2img;

		document.getElementById("relationship2").innerHTML = data1;
		document.getElementById("relationshipImg2").src = data1img;
		document.getElementById("relationship2").style.color = "red";
		timeNodesRelationships[currentTimeNodeIndex][1] = data1;
		timeNodesRelationshipImgs[currentTimeNodeIndex][1] = data1img;
	}

	else if(currentChoiceNodeIndex == 1){
		if(choice == 1){
			document.getElementById("personLocation").innerHTML = timeNodesProfileLocation[1];
			document.getElementById("personLocation").style.color = "red";
		}
		else {
			document.getElementById("personLocation").innerHTML = timeNodesProfileLocation[2];
			document.getElementById("personLocation").style.color = "red";
			
		}
	}

	else if(currentChoiceNodeIndex == 2){
		if(choice == 1){
			document.getElementById("personOccupation").innerHTML = timeNodesProfileOccupation[2];
			document.getElementById("personOccupation").style.color = "red";
			document.getElementById("personLocation").innerHTML = timeNodesProfileLocation[3];
			document.getElementById("personLocation").style.color = "red";
		}
		else {
			document.getElementById("personOccupation").innerHTML = timeNodesProfileOccupation[4];
			document.getElementById("personOccupation").style.color = "red";
			document.getElementById("personLocation").innerHTML = timeNodesProfileLocation[0];
			document.getElementById("personLocation").style.color = "red";
		}
	}

	else if(currentChoiceNodeIndex == 3){
		var currentPerson2Name = document.getElementById("relationship2").innerHTML;

		if((choice == 1) && (currentPerson2Name !="Ana Swanson")){
			document.getElementById("relationship2").innerHTML = "Ana Swanson";
			document.getElementById("relationshipImg2").src = timeNodesProfilePeopleEmoticons[1];
			document.getElementById("relationship2").style.color = "red";

			timeNodesRelationships[currentTimeNodeIndex][1] = "Ana Swanson";
			timeNodesRelationshipImgs[currentTimeNodeIndex][1] = timeNodesProfilePeopleEmoticons[1];
		}
		else if ((choice == 2) && (currentPerson2Name =="Ana Swanson")) {
			document.getElementById("relationship2").innerHTML = "George Borne";
			document.getElementById("relationshipImg2").src = timeNodesProfilePeopleEmoticons[2];
			document.getElementById("relationship2").style.color = "red";

			timeNodesRelationships[currentTimeNodeIndex][1] = "George Borne";
			timeNodesRelationshipImgs[currentTimeNodeIndex][1] = timeNodesProfilePeopleEmoticons[2];
		}
		else {
			//we dont care...
		}

		//change bg
		var bgPic = document.getElementById("mainBg").innerHTML;
		if (bgPic == "landscape_winter.png")
		{
			document.getElementById("mainBg").innerHTML = "landscape_summer.png";
		}
		else
		{
			document.getElementById("mainBg").innerHTML = "landscape_winter.png";
		}

	}
}

/**************************TIMELINE**************************/

function timeline() {
	this.timeNodes = 5;
	this.choiceNodes = 4;
}

timeline.prototype.visual = function () {
	
	//line
	var timelineDiv = document.getElementById("visualTimeline");
	var backboneCanvas = document.getElementById("backboneTimeline");

	var backBoneTimeline = backboneCanvas.getContext("2d");

	backBoneTimeline.beginPath();
	backBoneTimeline.lineCap = "round";
	backBoneTimeline.moveTo(10,20);
	backBoneTimeline.lineTo(400,20);
	backBoneTimeline.stroke();

	//placing time node objects
	for (var i =0; i < mainTimeline.timeNodes; i++){
		//cute buttons
		var img = document.createElement('img');
		img.className = 'timelineTimeNode';
		img.id = 'topImg' + i;
		img.src = 'timeline-' + i + '.png';
		if(i != 3)
		{
			var left = 80*(i) +50;
			img.style.left = left + 'px';
			img.style.top = '360px';
		}
		//else if(i == 4)
		//{
			//house looks ugly 
			//img.style.height = 40px;
			//img.style.width = auto;
		//}
		else
		{
			var left = 80*(i) +50;
			img.style.left = left + 'px';
			img.style.top = '345px';
		}
		

		//when you click on the img
		img.onclick = (function (index) {
			return function(){
				onClickTimeNode(index);
			}
		})(i);

		timelineDiv.appendChild(img);

		//vertical lines
		var verticalLine = document.createElement('img');
		verticalLine.className = 'timelineVerticalLine';
		verticalLine.src = 'verticalLine.png';
		var left = 80*(i) +33;
		verticalLine.style.left = left + 'px';
		verticalLine.style.top = '350px';

		timelineDiv.appendChild(verticalLine);
	}

	//placing choice node objects
	for (var i =0; i < mainTimeline.choiceNodes; i++){
		//cute buttons
		var img = document.createElement('img');
		img.className = 'timelineChoiceNode';
		img.src = 'timeline-choiceNodes.png';
		img.id = 'img' + i;
		var left = 80*(i) +87;
		img.style.left = left + 'px';
		img.style.top = '425px';

		//when you click on the img
		img.onclick = (function (index) {
			return function(){
				onClickChoiceNode(index);
			}
		})(i);


		timelineDiv.appendChild(img);

		//vertical lines
		var verticalLine = document.createElement('img');
		verticalLine.className = 'timelineVerticalLine';
		verticalLine.src = 'verticalLine.png';
		var left = 80*(i) +70;
		verticalLine.style.left = left + 'px';
		verticalLine.style.top = '385px';

		timelineDiv.appendChild(verticalLine);
	}

};

