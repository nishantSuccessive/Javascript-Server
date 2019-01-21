import { IPermissions, IUsers } from "./utils/interfaces";
const headTrainer: string = "head-trainer";
const trainee: string = "trainee";
const trainer: string = "trainer";
export const getUsers: string = "getUsers";
export const getPasswords: string = "getPasswords";
export const getEmployeeAddress: string = "getEmployeeAddress";
export const getEmployeeId: string = "getEmployeeId";
export const getBranchName: string = "getBranchName";

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
