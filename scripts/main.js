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