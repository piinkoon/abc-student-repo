(function() {

	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'You should open a new tab!';
	document.body.appendChild(div);

	alert("Hey! Stop what you're doing & look at the top right of the page! 👀");

})();
