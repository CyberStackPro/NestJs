import { IsEmail, IsString, IsEnum, IsNotEmpty } from 'class-validator';
export enum Role {
  INTERN = 'INTERN',
  ENGINEER = 'ENGINEER',
  ADMIN = 'ADMIN',
}
// const roles = 'ADMIN' | 'INTERN' | 'ENGINEER';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(Role, { message: 'Role is not valid' })
  role: Role;
}
