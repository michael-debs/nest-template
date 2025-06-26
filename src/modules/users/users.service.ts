import { Inject, Injectable, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRep: Repository<Users>,
  ) {}

  async create(user: CreateUserDto) {
    return this.userRep.save(user);
  }

  findAll() {
    return this.userRep.find();
  }

  findOneById(user_id: number) {
    return this.userRep.findOneBy({ id: user_id });
  }

  findOneWithUsername(username: string) {
    return this.userRep.findOneBy({ username: username });
  }

  update(user_id: number, user: UpdateUserDto) {
    return this.userRep.update({ id: user_id }, user);
  }

  remove(user_id: number) {
    this.userRep.delete({ id: user_id });
    return `This action removes a #${user_id} user`;
  }
}
