const headTrainer = 'head-trainer';
const trainee = 'trainee';
const trainer = 'trainer';
export const permissions = {
    'getUsers': {
    all: [headTrainer],
    read : [trainee, trainer],
    write : [trainer],
    delete: [],
    }
}
export const users = [{
	traineeEmail: 'trainee1@successive.tech',
	reviewerEmail: 'reviewer@successive.tech',
	}];


