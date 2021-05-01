export function validateEmail( userEmails ) {
	let regex = /[A-Z0-9._%+-]+@successive.tech/igm;
	return regex.test(userEmails);
}
