import { Injectable } from '@nestjs/common';
import { UsersEntity } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {
  }

  async create(createUserDto: CreateUserDto): Promise<UsersEntity> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = this.usersRepository.create({
      username: createUserDto.username,
      password: hashedPassword,
      fullname: createUserDto.fullname
    });
    return this.usersRepository.save(newUser);
  }
  async findOne(username: string): Promise<UsersEntity> {
  }
}
