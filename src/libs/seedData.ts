import UserRepository from '../repositories/user/UserRepository'
export default ()=>{
const obj = new UserRepository()
obj.create({id:"12",name:"hghg"})
obj.update({name:"hghg"},{id:"12",name:"nishsj"});
obj.delete({name:"hghg"});
}
