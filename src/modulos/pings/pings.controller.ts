import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PingsService } from './pings.service';
import { CriaIpsDTO } from './dto/CriaIps.dto';

@Controller('pings')
export class PingsController {
  constructor(private readonly pingService: PingsService) {}
  @Get()
  async listaIps() {
    return this.pingService.listaTodosOsIps();
  }

  @Get(':ip')
  async listaIp(@Param('ip') ip: string) {
    return this.pingService.listaIp(ip);
  }

  @Post()
  async criandoIp(@Body() dados: CriaIpsDTO) {
    return this.pingService.criaIp(dados);
  }

  @Patch(':id')
  async atualizaIp(
    @Body() novoDados: Partial<CriaIpsDTO>,
    @Param() id: number,
  ) {
    return this.pingService.atualizaIp(novoDados, id);
  }

  @Delete(':id')
  async deletaIp(@Param() id) {
    return { id };
  }
}
