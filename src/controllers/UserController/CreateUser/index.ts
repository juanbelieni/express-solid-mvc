import TypeORMUserModel from '../../../models/UserModel/implementations/TypeORMUserModel';
import CreateUserController from './CreateUserController';
import CreateUserUseCase from './CreateUserUseCase';

const typeORMUserModel = new TypeORMUserModel();

const createUserUseCase = new CreateUserUseCase(typeORMUserModel);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
