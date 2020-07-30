import User from '../../../entities/User';
import IUserModel from '../../../models/UserModel/IUserModel';
import { getHashedPassword } from '../../../utils/password';
import ICreateUserDTO from './ICreateUserDTO';

export default class CreateUserUseCase {
  constructor(private userModel: IUserModel) {}

  async create(data: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userModel.findByEmail(data.email);

    if (userAlreadyExists) {
      throw Error('Email already registered.');
    }

    const user = new User();
    user.name = data.name;
    user.email = data.email;
    user.hashedPassword = getHashedPassword(data.password);

    await this.userModel.save(user);
  }
}
