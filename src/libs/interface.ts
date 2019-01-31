export default interface IPermissions {
	getUsers: {
		read: string[];
		write: string[];
		delete: string[];
		all: string[];
	};
}
