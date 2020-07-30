import IUserModel from '../../../models/UserModel/IUserModel';
import { getHashedPassword } from '../../../utils/password';
import ILoginDTO from './ILoginDTO';

export default class LoginUseCase {
  constructor(private userModel: IUserModel) {}

  async login(data: ILoginDTO) {
    const user = await this.userModel.findByEmail(data.email);

    if (!user) {
      throw Error('Email not registered.');
    }

    if (user.hashedPassword !== getHashedPassword(data.password)) {
      throw Error('Invalid password.');
    }
  }
}
