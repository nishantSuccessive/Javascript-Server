import { diamond, equilateralTriangle } from "./patterns";
import { hasPermission, validateUsers } from "./utils";
import { users } from "./constants";
diamond(5);
equilateralTriangle(5);
console.log(hasPermission("getUsers", "trainee", "read"));
validateUsers(users);
