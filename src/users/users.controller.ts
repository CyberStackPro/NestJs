import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}
  @Get() // GET /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersServices.findAll(role);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersServices.findOne(+id);
  }

  @Post() // POST /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersServices.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  updateOne(
    @Param('id') id: string,
    @Body()
    updateUser: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersServices.updateOne(+id, updateUser);
  }

  @Delete(':id') // GET /users/:id
  deleteOne(@Param('id') id: string) {
    return this.usersServices.deleteOne(+id);
  }
}
