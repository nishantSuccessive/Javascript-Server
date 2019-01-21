import { diamond, equilateralTriangle } from "./patterns";
import { hasPermission } from "./utils";
import { validateUsers } from "./utils";
import { users } from "./constants";
diamond(5);
equilateralTriangle(5);
console.log(hasPermission("getUser", "trainee", "read"));
validateUsers(users);
