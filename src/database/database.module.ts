import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (ConfigService: any) => ({}),
      inject: [],
    }),
  ],
})
export class DatabaseModule {}
