import { Module } from '@nestjs/common';

@Module({
  providers: [DatabaseModule],
  exports: [DatabaseModule],
})
export class DatabaseModule {}
