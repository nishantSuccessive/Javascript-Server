export default function successHandler(message: string, data: any) {
  return {
    name: message,
    // tslint:disable-next-line:object-literal-sort-keys
    Info: data,
  };
}
