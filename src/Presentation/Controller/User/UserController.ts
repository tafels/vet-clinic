import { ApiCreatedResponse, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../../Domain/Entity/User/UserEntity';
import { UserService } from '../../Service/User/UserService';
import { UserCreateDto } from '../../../Application/Dto/User/UserCreateDto';
import { UserUpdateDto } from '../../../Application/Dto/User/UserUpdateDto';

@ApiTags('Users')
@ApiSecurity("X-API-KEY", ["X-API-KEY"])
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Create new user' })
  @ApiCreatedResponse({ description: 'User record has been successfully created.', type: User})
  @Post()
  create(@Body() userCreateDto: UserCreateDto) {
    return this.userService.create(userCreateDto);
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Find user by login' })
  @ApiResponse({ status: 200, type: User })
  @Get(':login')
  async findOne(@Param('login') login: string) {
    return await this.userService.findOne(login);
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: User })
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiOperation({ summary: 'Update info user' })
  @ApiResponse({ status: 200, type: User })
  @Put(':login')
  async update(@Param('login') login: string, @Body() userUpdateDto: UserUpdateDto) {
    return await this.userService.update(login, userUpdateDto);
  }

  @UseGuards(AuthGuard('api-key'))
  @ApiResponse({ status: 200, description: 'Remove user successful' })
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.userService.remove(id);
  }

}