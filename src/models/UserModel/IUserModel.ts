import User from '../../entities/User';

export default interface IUserModel {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
