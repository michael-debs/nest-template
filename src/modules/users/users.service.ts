import { Inject, Injectable, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRep: Repository<User>,
  ) {}

  async create(user: CreateUserDto) {
    this.userRep.save(user);
  }

  findAll() {
    this.userRep.find();
  }

  findOneById(user_id: number) {
    this.userRep.findOneBy({ id: user_id });
  }

  findOneWithUsername(username: string) {
    this.userRep.findOneBy({ username: username });
  }

  update(user_id: number, user: UpdateUserDto) {
    this.userRep.update({ id: user_id }, user);

    return `This action updates a #${user_id} user`;
  }

  remove(user_id: number) {
    this.userRep.delete({ id: user_id });
    return `This action removes a #${user_id} user`;
  }
}
