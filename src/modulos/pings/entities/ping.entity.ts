import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TipoPingEnum } from '../enum/TipoPing.enum';

@Entity({ name: 'ips' })
export class PingEntity {
  @PrimaryGeneratedColumn('increment') // Usando incremento automático
  id: number;

  @Column({ name: 'tipo', type: 'enum', enum: TipoPingEnum, nullable: false })
  type: TipoPingEnum;

  @Column({ name: 'HostName', length: 250, nullable: false })
  hostName: string;

  @Column({ name: 'ip', length: 15, nullable: false })
  ip: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
