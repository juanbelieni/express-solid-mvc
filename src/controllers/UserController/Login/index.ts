import TypeORMUserModel from '../../../models/UserModel/implementations/TypeORMUserModel';
import LoginController from './LoginController';
import LoginUseCase from './LoginUseCase';

const typeORMUserModel = new TypeORMUserModel();

const loginUseCase = new LoginUseCase(typeORMUserModel);

const loginController = new LoginController(loginUseCase);

export { loginController, LoginController };
