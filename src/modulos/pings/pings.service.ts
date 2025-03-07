import { Injectable, NotFoundException } from '@nestjs/common';
import { CriaIpsDTO } from './dto/CriaIps.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PingEntity } from './entities/ping.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PingsService {
  constructor(
    @InjectRepository(PingEntity)
    private readonly pingRepository: Repository<PingEntity>,
  ) {}
  async listaTodosOsIps() {
    return this.pingRepository.find();
  }

  async listaIp(ip: string) {
    const resultado = await this.pingRepository.findOne({ where: { ip } });

    if (!resultado) throw new NotFoundException('Ip não encontrado');

    return resultado;
  }

  async criaIp(dados: CriaIpsDTO) {
    const IpEntity = new PingEntity();

    IpEntity.hostName = dados.hostName;
    IpEntity.type = dados.type;
    IpEntity.ip = dados.ip;

    return this.pingRepository.save(IpEntity);
  }

  async atualizaIp(novosDados: Partial<CriaIpsDTO>, id: number) {
    const EntitName = await this.pingRepository.findOne({ where: { id } });

    if (!EntitName) {
      throw new NotFoundException('id não encontrado!');
    }
    Object.assign(EntitName, novosDados);
    return this.pingRepository.save(EntitName);
  }

  async deletaIp(id: string) {
    const resultado = await this.pingRepository.delete(id);

    if (resultado.affected) {
      throw new NotFoundException('Ip não encontrado!');
    }

    return resultado;
  }
}
