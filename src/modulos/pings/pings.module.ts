import { Module } from '@nestjs/common';
import { PingsController } from './pings.controller';
import { PingsService } from './pings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PingEntity } from './entities/ping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PingEntity])],
  controllers: [PingsController],
  providers: [PingsService],
  exports: [PingsService],
})
export class PingsModule {}
