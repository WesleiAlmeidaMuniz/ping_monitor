import { MigrationInterface, QueryRunner } from "typeorm";

export class CriandoTabelas1733399301058 implements MigrationInterface {
    name = 'CriandoTabelas1733399301058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`ips\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tipo\` enum ('impressora', 'camera', 'ramal', 'servidor', 'acesspoint') NOT NULL, \`HostName\` varchar(250) NOT NULL, \`ip\` varchar(15) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`ips\``);
    }

}
