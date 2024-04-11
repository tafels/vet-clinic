import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../Service/Auth/AuthService';
import { UserAuthDto } from '../../../Application/Dto/User/UserAuthDto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Log in and get a token' })
  @ApiResponse({ status: 200, description: 'get you token' })
  @Post()
  create(@Body() userAuthDto: UserAuthDto) {
    return this.authService.initToken(userAuthDto);
  }
}