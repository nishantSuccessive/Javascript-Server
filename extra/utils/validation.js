const users = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer@successive.tech',
    }];
    console.log( validateEmail( users ) );
     function validateEmail( userEmails ) {
      let regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]{2,4}/igm;
        let count = 0;
       if( regex.test( userEmails[0].traineeEmail ) ) {
           count++;
       }
       regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]{2,4}/igm;
       if( regex.test( userEmails[0].reviewerEmail ) ) {
           count++;
       }
       if( count == 2 ) {
           console.log( "Validated the emails of the user!!!!" );
           console.log( "Now validating the user for specific domain....." );
         validateUsers( userEmails );
         return true;
        }
       else {
           console.log( "Email entered in wrong format " );
           return false;
       }
    }
function validateUsers( userEmails ) {
     let validTraineeId = 0;
     let validReviewerId = 0;
     let invalidTraineeId = 0;
     let invalidReviewerId = 0;
    userEmails.forEach( function( user ) {
        const{ traineeEmail, reviewerEmail } = user;
        let regex = /[A-Z0-9._%+-]+@successive.tech/igm;
        if( regex.test( traineeEmail ) ) {
            validTraineeId++;
            console.log( "Valid Trainees Id:- ",validTraineeId );
        }
        else {
            invalidTraineeId++;
            console.log(" invalid Trainees id:- ", invalidTraineeId );
        }
        regex = /[A-Z0-9._%+-]+@successive.tech/igm;
        if( regex.test( reviewerEmail ) ) {
            validReviewerId++;
            console.log( "Valid Reviewers Id:-" ,validReviewerId );
        }
        else {
            invalidReviewerId++;
            console.log( "invalid Reviewer id:- ", invalidReviewerId );
        }
    });
}