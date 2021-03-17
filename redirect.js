const redirectMessage = "You will be redirected, please wait a moment...";
const redirectURL = "https://dominik48n.de";

function redirect() {
	this.redirectToWebsite(this.redirectURL);
}

function redirectToWebsite(redirectURL) {
	location.href = redirectURL;

	console.log(this.redirectMessage);
	console.log("Forwarding to " + this.redirectURL);
}

function getRedirectMessage() {
	console.log("Get the redirect message!");
	return this.redirectMessage;
}
