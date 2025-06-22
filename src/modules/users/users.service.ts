import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DATABASE } from 'src/core/database/database.service';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { UserSchema } from './entities/user.entity';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE)
    private readonly db: NodePgDatabase,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = this.db.insert(UserSchema).values(createUserDto).returning();
    return user
  }

  findAll() {
    return this.db.select().from(UserSchema)
  }

  findOne(id: number) { return this.db.select().from(UserSchema).where(eq(UserSchema.id, id)).limit(1)[0] }

  findOneWithUsername(username: string) { return this.db.select().from(UserSchema).where(eq(UserSchema.username, username)).limit(1)[0  ] }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
