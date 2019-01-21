import { IPermissions, IUsers } from "./utils/interfaces";
const headTrainer: string = "head-trainer";
const trainee: string = "trainee";
const trainer: string = "trainer";
export const getUsers: string = " ";
export const getPasswords: string = " ";
export const getEmployeeAddress: string = " ";
export const getEmployeeId: string = " ";
export const getBranchName: string = " ";

export const permissions: IPermissions = {
	getUsers: {
		all: [headTrainer],
		read: [trainee, trainer],
		write: [trainer],
		delete: []
	},
	getPasswords: {
		all: [headTrainer],
		read: [trainer],
		write: [trainer, trainee],
		delete: []
	},
	getEmployeeId: {
		all: [headTrainer],
		read: [trainer, trainee],
		write: [trainee],
		delete: []
	},
	getBranchName: {
		all: [headTrainer],
		read: [trainer, trainee],
		write: [trainer, trainee],
		delete: []
	},
	getEmployeeAddress: {
		all: [headTrainer],
		read: [trainer],
		write: [trainee],
		delete: []
	}
};
export const users: IUsers[] = [
	{
		traineeEmail: "trainee1@successive.tech",
		reviewerEmail: "reviewer@successive.tech"
	}
];
