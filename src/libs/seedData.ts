import UserRepository from '../repositories/user/UserRepository';

export default () => {
const obj = new UserRepository();
obj.count()
.then((count) => {
console.log('user is', count);
if (count === 0) {
    obj.create({name: 'Nishant', role: 'head-trainer', email: 'head-trainer@successive.tech'});
    obj.create({name: 'Saxena', role: 'trainee', email: 'trainee@successive.tech'});

}
});
// obj.update({id: '12'}, {id: '187', name: 'Nishant'});
// obj.delete({name: 'Nishant'});
};
