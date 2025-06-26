import {
  Body,
  Controller,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './Local-auth.guard';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user) {
    const validated_user = await this.authService.validateUser(
      user.username,
      user.password,
    );

    if (validated_user === null)
      throw new UnauthorizedException('invalid username or password');
    return this.authService.login(user);
  }
}
