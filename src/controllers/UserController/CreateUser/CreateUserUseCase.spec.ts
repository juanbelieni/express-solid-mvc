import User from '../../../entities/User';
import MockedUserModel from '../../../models/UserModel/implementations/MockedUserModel';
import { getHashedPassword } from '../../../utils/password';
import CreateUserUseCase from './CreateUserUseCase';

const mockedUserModel = new MockedUserModel();
const createUserUseCase = new CreateUserUseCase(mockedUserModel);

beforeEach(() => {
  mockedUserModel.truncate();
});

test('create user', async () => {
  await createUserUseCase.create({
    name: 'Juan Belieni',
    email: 'juanbelieni@gmail.com',
    password: 'juan1234',
  });

  const user = await mockedUserModel.findByEmail('juanbelieni@gmail.com');

  expect(user).toMatchObject({
    name: 'Juan Belieni',
    email: 'juanbelieni@gmail.com',
    hashedPassword: getHashedPassword('juan1234'),
  });
});

test('error if email already registered', async () => {
  const user = new User();
  user.email = 'juanbelieni@gmail.com';

  await mockedUserModel.save(user);

  await expect(
    createUserUseCase.create({
      name: 'Juan Belieni',
      email: 'juanbelieni@gmail.com',
      password: 'juan1234',
    })
  ).rejects.toThrow(Error);
});
