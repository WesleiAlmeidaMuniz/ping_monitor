import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ImpressoraModule } from './impressora/impressora.module';

@Module({
  imports: [ImpressoraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
