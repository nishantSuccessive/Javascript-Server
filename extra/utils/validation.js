import { validateEmail } from './helpers';
export function validateUsers( userEmails ) {
     let validTraineeId = 0;
     let validReviewerId = 0;
     let invalidTraineeId = 0;
     let invalidReviewerId = 0;
    userEmails.forEach( function( user ) {
        const{ traineeEmail, reviewerEmail } = user;
       
        if( validateEmail(traineeEmail) ) {
            validTraineeId++;
        }
        else {
            invalidTraineeId++;
        }
        if( validateEmail(reviewerEmail)  ) {
            validReviewerId++;
        }
        else {
            invalidReviewerId++;
        }
    });
    console.log( `Valid Trainees Id - ${validTraineeId} & invalid Trainees Id- ${invalidTraineeId}` );
    console.log( `Valid Reviewers Id - ${validReviewerId} & Invalid Reviewer id - ${invalidReviewerId}` );
}