import { getRepository } from 'typeorm';

import User from '../../../entities/User';
import IUserModel from '../IUserModel';

export default class TypeORMUserModel implements IUserModel {
  async findByEmail(email: string): Promise<User> {
    const user = await getRepository(User).findOne({ email });
    return user;
  }

  async save(user: User): Promise<void> {
    await getRepository(User).save(user);
  }

  async truncate(): Promise<void> {
    await getRepository(User).delete({});
  }
}
