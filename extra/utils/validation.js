const users = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer@successive.tech',
    }];
    validateUsers(users) ;

     function validateEmail( userEmails ) {
        let regex = /[A-Z0-9._%+-]+@successive.tech/igm;
        return regex.test(userEmails);
    }
function validateUsers( userEmails ) {
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