import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}
  @Get() // GET /users
  findAll(@Query('role', ParseIntPipe) role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersServices.findAll(role);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.usersServices.findOne(+id);
  }

  @Post() // POST /users
  create(
    @Body()
    user: CreateUserDto,
  ) {
    return this.usersServices.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  updateOne(
    @Param('id') id: string,
    @Body()
    updateUser: UpdateUserDto,
  ) {
    return this.usersServices.updateOne(+id, updateUser);
  }

  @Delete(':id') // GET /users/:id
  deleteOne(@Param('id', ParseIntPipe) id: string) {
    return this.usersServices.deleteOne(+id);
  }
}
