import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import dataSource from './data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource.options),
  ],
})
export class DatabaseModule {}
