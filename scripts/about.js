var bananaPic = document.getElementById('bananapic');
var sausagePic = document.getElementById('sausagepic');


bananaPic.onclick = function() {
	var newBanana = document.createElement('img');
	newBanana.setAttribute('src','images/bananaphin.jpg');
	document.body.appendChild(newBanana);	
}

sausagePic.onclick = function() {
	var newSausage = document.createElement('img');
	newSausage.setAttribute('src','images/sausage-dog.jpg');
	document.body.appendChild(newSausage);
}
