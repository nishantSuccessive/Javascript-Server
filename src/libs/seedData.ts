import UserRepository from '../repositories/user/UserRepository';
export default () => {
const obj = new UserRepository();
obj.create({id: '12', name: 'Nishant'});
obj.update({id: '12'}, {id: '187', name: 'Nishant'});
obj.delete({name: 'Nishant'});
};
