var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/Sausana.jpg') {
		myImage.setAttribute ('src', 'images/Sausana-fullhd.jpg');
		alert('You are myopic now!');
	} else {
		myImage.setAttribute ('src', 'images/Sausana.jpg')
		alert('Not anymore!');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Banana sausages are cool, aren\'t they, ' + myName + "?";
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Banana sausages are cool, aren\'t they, ' + storedName + "?";
}

myButton.onclick = function() {
	setUserName();
}


var bananaPic = document.getElementById('bananapic');
var sausagePic = document.getElementById('sausagepic');
var counter = 0;

bananaPic.onclick = function() {
	counter++;
	if (counter === 1) {
		var bananaContainer = document.createElement('div');
		bananaContainer.setAttribute("id","cont");
		var buttonParent = document.getElementById("bananapic").parentNode;
		var bananaB = document.getElementById("bananapic");
		buttonParent.insertBefore(bananaContainer,bananaB);
		
	}
	//TESTING TO SEE IF THE CONTAINER WAS REALLY CREATED.
	/*var bigTest = document.createElement('p');
	bigTest.textContent = 'THIS IS A HUGE TEST';
	
	document.getElementById("cont").appendChild(bigTest);*/
	
	console.log(counter);
	var newBanana = document.createElement('img');
	newBanana.setAttribute('src','images/bananaphin.jpg');
	document.getElementById("cont").appendChild(newBanana);
	
	
	
	/* THIS INSERTS THE IMAGE ABOVE THE CALLING BUTTON
	var parentN = document.getElementById("bananapic").parentNode;
	var bananabutton = document.getElementById("bananapic");
	parentN.insertBefore(newBanana, bananabutton);*/
}

sausagePic.onclick = function() {
	var newSausage = document.createElement('img');
	newSausage.setAttribute('src','images/sausage-dog.jpg');
	document.body.appendChild(newSausage);
}


