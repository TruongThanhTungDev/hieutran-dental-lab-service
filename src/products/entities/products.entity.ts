import { ApiProperty } from "@nestjs/swagger";
import { CommonEntity } from "src/common/entity/common.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductsEntity extends CommonEntity {
  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Mã thẻ',
  })
  @Column({ nullable: false, unique: false, comment: 'Mã thẻ' })
  code: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Tên bệnh nhân',
  })
  @Column({ nullable: false, unique: false, comment: 'Tên bệnh nhân' })
  patientName: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Giới tính',
  })
  @Column({ nullable: true, unique: false, comment: 'Giới tính' })
  sex: number;
}