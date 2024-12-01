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
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto, Role } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}
  @Get() // GET /users
  findAll(@Query('role') role?: Role) {
    return this.usersServices.findAll(role);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.usersServices.findOne(+id);
  }

  @Post() // POST /users
  create(
    @Body(ValidationPipe)
    user: CreateUserDto,
  ) {
    return this.usersServices.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  updateOne(
    @Param('id') id: number,
    @Body(ValidationPipe)
    updateUser: UpdateUserDto,
  ) {
    return this.usersServices.updateOne(+id, updateUser);
  }

  @Delete(':id') // GET /users/:id
  deleteOne(@Param('id', ParseIntPipe) id: string) {
    return this.usersServices.deleteOne(+id);
  }
}
