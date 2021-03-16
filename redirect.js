redirectMessage = "You will be redirected, please wait a moment...";
redirectURL = "https://dominik48n.de";

function redirect() {
	location.href = this.redirectURL;
	console.log(this.redirectMessage)
}

function getRedirectMessage() {
	return this.redirectMessage;
}
