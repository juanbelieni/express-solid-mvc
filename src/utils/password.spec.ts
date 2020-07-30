import { getHashedPassword } from './password';

test('get hashed password', () => {
  const password = '12345678';
  const hashedPassword = getHashedPassword(password);

  expect(hashedPassword).not.toBe(password);
});
