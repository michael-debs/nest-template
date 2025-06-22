import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DATABASE } from 'src/core/database/database.service';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Schema } from 'src/core/database/schema';
import { UserSchema } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE)
    private readonly db: NodePgDatabase<Schema>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    this.db.insert(UserSchema);
  }

  findAll() {}

  findOne(id: number) {}

  findOneWithUsername(username: string) {}

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
