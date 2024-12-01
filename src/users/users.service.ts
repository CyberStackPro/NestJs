import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Carol White',
      email: 'carol.white@example.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david.brown@example.com',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Eve Black',
      email: 'eve.black@example.com',
      role: 'ENGINEER',
    },
    {
      id: 6,
      name: 'Frank Green',
      email: 'frank.green@example.com',
      role: 'ADMIN',
    },
    {
      id: 7,
      name: 'Grace Lee',
      email: 'grace.lee@example.com',
      role: 'ENGINEER',
    },
    {
      id: 8,
      name: 'Hank Thompson',
      email: 'hank.thompson@example.com',
      role: 'INTERN',
    },
    {
      id: 9,
      name: 'Ivy Adams',
      email: 'ivy.adams@example.com',
      role: 'ADMIN',
    },
    {
      id: 10,
      name: 'Jack Carter',
      email: 'jack.carter@example.com',
      role: 'ENGINEER',
    },
  ];
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    // Check if a role is provided
    if (role) {
      // Filter users based on the role
      const filteredUsers = this.users.filter((user) => user.role === role);

      // If no users match the role, return all users
      if (!filteredUsers.length) {
        return this.users;
      }

      // Return the filtered users
      return filteredUsers;
    }

    // If no role is provided, return all users
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) return { message: 'Invalid User', statusCode: 400 };

    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      // id: user.
      ...user,
    };
    const users = this.users.push(newUser);
    return users;
  }

  updateOne(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) return { ...user, ...updatedUser };
      return user;
    });

    return this.findOne(id);
  }

  deleteOne(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
