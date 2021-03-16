const redirectMessage = "You will be redirected, please wait a moment...";
const redirectURL = "https://dominik48n.de";

function redirect() {
	location.href = this.redirectURL;
	console.log(this.redirectMessage);
	console.log("Forwarding to " + this.redirectURL);
}

function getRedirectMessage() {
	return this.redirectMessage;
}
