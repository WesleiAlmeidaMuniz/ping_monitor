import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('impressoras')
export class ImpressoraController {
  @Get()
  async listaImpressoras() {
    return 'Sou a rota GET Impressoras';
  }

  @Get(':id')
  async listaImpressora(@Param() id) {
    return { impressora: {}, id };
  }

  @Post()
  async criandoImpressora(@Body() impressoras) {
    return impressoras;
  }

  @Patch(':id')
  async atualizaimpressora(@Body() novoDados, @Param() id) {
    return { method: 'patch', id, novoDados };
  }

  @Delete(':id')
  async deletaImpressora(@Param() id) {
    return { id };
  }
}
