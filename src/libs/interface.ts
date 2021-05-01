export default interface IPermissions {
  [TRAINEEE: string]: {
    read: string[];
    write: string[];
    delete: string[];
    all: string[];
  };
}
