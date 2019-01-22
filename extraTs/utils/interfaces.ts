export interface IPermissions {
	getUsers: {
		read: string[];
		write: string[];
		delete: string[];
		all: string[];
	};
	getPasswords: {
		read: string[];
		write: string[];
		delete: string[];
		all: string[];
	};
	getEmployeeId: {
		read: string[];
		write: string[];
		delete: string[];
		all: string[];
	};
	getBranchName: {
		read: string[];
		write: string[];
		delete: string[];
		all: string[];
	};
	getEmployeeAddress: {
		read: string[];
		write: string[];
		delete: string[];
		all: string[];
	};
}
export interface IUsers {
	traineeEmail: string;
	reviewerEmail: string;
}
