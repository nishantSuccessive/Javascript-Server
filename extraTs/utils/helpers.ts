export function validateEmail( userEmails: string ): boolean {
	let regex: RegExp = /[A-Z0-9._%+-]+@successive.tech/gim;

	return regex.test(userEmails);
}
