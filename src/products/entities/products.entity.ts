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
    description: 'Mã thẻ chỉ có số',
  })
  @Column({ nullable: false, unique: false, comment: 'Mã thẻ chỉ có số' })
  codeOnlyNumber: string;

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

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Phòng khám/Bác sĩ',
  })
  @Column({ nullable: true, unique: false, comment: 'Phòng khám/Bác sĩ' })
  doctorClinic: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Số răng',
  })
  @Column({ nullable: true, unique: false, comment: 'Số răng' })
  numberOfTeeth: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Vật liệu',
  })
  @Column({ nullable: true, unique: false, comment: 'Vật liệu' })
  material: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Thời gian bắt đầu bảo hành',
  })
  @Column({
    nullable: true,
    unique: false,
    comment: 'Thời gian bắt đầu bảo hành',
    type: 'bigint',
  })
  startDate: number;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Thời gian kết thúc bảo hành',
  })
  @Column({
    nullable: true,
    unique: false,
    comment: 'Thời gian kết thúc bảo hành',
    type: 'bigint',
  })
  endDate: number;
}