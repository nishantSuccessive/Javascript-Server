import { validateEmail } from "./helpers";
import { IUsers } from "../utils/interfaces";
export function validateUsers( userEmails: IUsers[] ): void {
	let validTraineeId: number = 0;
	let validReviewerId: number = 0;
	let invalidTraineeId: number = 0;
	let invalidReviewerId: number = 0;
	userEmails.forEach( function( user ) {
		const { traineeEmail, reviewerEmail } = user;

		if (validateEmail( traineeEmail )) {
			validTraineeId++;
		} else {
			invalidTraineeId++;
		}
		if (validateEmail( reviewerEmail )) {
			validReviewerId++;
		} else {
			invalidReviewerId++;
		}
	});
	console.log(
		`Valid Trainees Id - ${validTraineeId} & invalid Trainees Id- ${invalidTraineeId}`
	);
	console.log(
		`Valid Reviewers Id - ${validReviewerId} & Invalid Reviewer id - ${invalidReviewerId}`
	);
}
