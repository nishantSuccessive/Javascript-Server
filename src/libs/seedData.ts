import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';

export default () => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(process.env.PASSWORD, saltRounds);
  UserRepository.count()
.then((count) => {
console.log('user is', count);
if (count === 0) {
  UserRepository.create({name: 'Nishant', role: 'head-trainer', email: 'head-trainer@successive.tech', password: hash});
  UserRepository.create({name: 'Saxena', role: 'trainee', email: 'trainee@successive.tech', password: hash});

}
});
// obj.update({id: '12'}, {id: '187', name: 'Nishant'});
// obj.delete({name: 'Nishant'});
};
