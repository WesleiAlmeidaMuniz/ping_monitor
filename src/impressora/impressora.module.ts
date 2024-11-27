import { Module } from '@nestjs/common';
import { ImpressoraController } from './impressora.controller';

@Module({
  imports: [],
  controllers: [ImpressoraController],
  providers: [],
  exports: [],
})
export class ImpressoraModule {}
