import User from '../../../entities/User';
import MockedUserModel from '../../../models/UserModel/implementations/MockedUserModel';
import { getHashedPassword } from '../../../utils/password';
import LoginUseCase from './LoginUseCase';

const mockedUserModel = new MockedUserModel();
const loginUseCase = new LoginUseCase(mockedUserModel);

beforeAll(async () => {
  const user = new User();
  user.name = 'juanbelieni@gmail.com';
  user.email = 'juanbelieni@gmail.com';
  user.hashedPassword = getHashedPassword('juan1234');

  await mockedUserModel.save(user);
});

beforeEach(async () => {
  const user = new User();
  user.email = 'juanbelieni@gmail.com';

  await mockedUserModel.save(user);
});

test('login', async () => {
  await loginUseCase.login({
    email: 'juanbelieni@gmail.com',
    password: 'juan1234',
  });
});

test('error if email not registered', async () => {
  await expect(
    loginUseCase.login({
      email: 'not.registered@gmail.com',
      password: 'juan1234',
    })
  ).rejects.toThrow(Error);
});

test('error if password is invalid', async () => {
  await expect(
    loginUseCase.login({
      email: 'juanbelieni@gmail.com',
      password: 'invalid.password',
    })
  ).rejects.toThrow(Error);
});
