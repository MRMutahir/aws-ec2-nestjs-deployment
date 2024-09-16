import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: '1', name: 'Muhammad Mutahir', age: 19, job: 'Full Stack Developer' },
    { id: '2', name: 'John Doe', age: 28, job: 'Backend Developer' },
    { id: '3', name: 'Jane Doe', age: 24, job: 'Frontend Developer' },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserWithId(id: string) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
