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
  constructor(private usersServices: UsersService) {}
  @Get() // GET /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersServices.getUsers();
  }

  @Get('interns') // GET /users/interns
  findAllInterns() {
    return [];
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: { user: any }) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  updateOne(@Param('id') id: string, @Body() updateUser: any) {
    return { id, ...updateUser };
  }

  @Delete(':id') // GET /users/:id
  deleteOne(@Param('id') id: string) {
    return { id };
  }
}
