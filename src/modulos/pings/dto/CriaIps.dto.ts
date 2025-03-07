import { IsEnum, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { TipoPingEnum } from '../enum/TipoPing.enum';

export class CriaIpsDTO {
  @IsEnum(TipoPingEnum)
  @IsNotEmpty({ message: 'O campo "type" não pode estar vazio' })
  type: TipoPingEnum;

  @IsString({ message: 'O campo "hostName" deve ser uma string' })
  @IsNotEmpty({ message: 'O campo "hostName" não pode estar vazio' })
  hostName: string;

  @IsString({ message: 'O campo "ip" deve ser uma string' })
  @IsNotEmpty({ message: 'O campo "ip" não pode estar vazio' })
  ip: string;
}
