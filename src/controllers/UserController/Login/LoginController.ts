import { Request, Response } from 'express';

import LoginUseCase from './LoginUseCase';

export default class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      await this.loginUseCase.login({
        email,
        password,
      });

      return response.status(200).json({
        message: 'User logged in.',
        token: '123',
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
