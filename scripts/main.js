var myImage = document.querySelector('img');


// THIS CHANGES THE MAIN BANANA/SAUSAGE PICTURE WHEN CLICKED
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


// CHANGES USERNAME AND UPDATE THE MAIN HEADING WHEN CLICKING THE "CHANGE USERNAME" BUTTON.
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




var bananaPic = document.getElementById('bananapic');  //GET A REFERENCE TO THE BANANA PIC GENERATING BUTTON
var sausagePic = document.getElementById('sausagepic'); //GET A REFERENCE TO THE SAUSAGE PIC GENERATING BUTTON


//FUNCTION TO CREATE A CONTAINER FOR THE IMAGES TO BE GENERATED WHEN THE BUTTON IS CLICKED.
function createContainer() {
	if (document.getElementById('cont') === null ) {
		var bananaContainer = document.createElement('div');
		bananaContainer.setAttribute("id","cont");
		
		/* THIS PLACES THE DIV ELEMENT BEFORE THE BUTTONS. SINCE THE BUTTON IS POSITION FIXED NOW IT DOESN'T WORK, BUT I'LL LEAVE IT HERE FOR REFERENCE.
		var buttonParent = document.getElementById("bananapic").parentNode;
		var bananaB = document.getElementById("bananapic");
		buttonParent.insertBefore(bananaContainer,bananaB);*/
		
		document.body.appendChild(bananaContainer);
		
	}
}

// GENERATES A BANANA PIC AT THE BOTTOM OF THE DOCUMENT.
bananaPic.onclick = function() {
	createContainer();
	var newBanana = document.createElement('img');
	newBanana.setAttribute('src','images/bananaphin.jpg');
	document.getElementById("cont").appendChild(newBanana);
}

// GENERATES A SAUSAGE PIC AT THE BOTTOM OF THE DOCUMENT.
sausagePic.onclick = function() {
	createContainer()
	var newSausage = document.createElement('img');
	newSausage.setAttribute('src','images/sausage-dog.jpg');
	document.getElementById("cont").appendChild(newSausage);
}




var deleteImages = document.getElementById('deleteimages'); // REFERENCE TO THE DELETE IMAGES BUTTON

// REMOVE THE CONTAINER IN WHICH THE IMAGES ARE STORES, THUS DELETING ALL THE IMAGES.
deleteImages.onclick = function() {
	var removeContainer = document.getElementById('cont');
	removeContainer.parentNode.removeChild(removeContainer);
}




var replaceSausage = document.getElementById('replacesausage'); //REFERENCE TO REPLACE SAUSAGE BUTTON
var replaceBanana = document.getElementById('replacebanana'); //REFERENCE TO REPLACE BANANA BUTTON

// REPLACES ALL SAUSAGE PICS WITH BANANA PICS
replaceSausage.onclick = function() {
	if (document.getElementById('cont')) {
		for (var i = 0; i < cont.childNodes.length; i++) {
			cont.childNodes[i].setAttribute('src','images/bananaphin.jpg');
		}
	}
}

// REPLACES ALL BANANA PICS WITH SAUSAGE PICS
replaceBanana.onclick = function() {
	if (document.getElementById('cont')) {
		for (var i = 0; i < cont.childNodes.length; i++) {
			cont.childNodes[i].setAttribute('src','images/sausage-dog.jpg');
		}
	}
}



