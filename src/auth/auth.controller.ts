import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // authServices: AuthService;
  constructor(private authService: AuthService) {
    // this.authService = authService
  }
  @Post('signup')
  signUp() {
    return this.authService.signUp();
  }
  @Post('signin')
  signIn() {
    return this.authService.signIn();
  }
}
