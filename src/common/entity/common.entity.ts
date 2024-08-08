import { ApiProperty } from "@nestjs/swagger";
import * as moment from "moment";
import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class CommonEntity extends BaseEntity {
  @ApiProperty({ description: 'Id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Thời gian tạo' })
  @Column({ name: 'created_at', type: 'varchar', length: 255, nullable: true })
  createdAt: any;

  @ApiProperty({ description: 'Thời gian cập nhật' })
  @Column({ name: 'updated_at', type: 'varchar', length: 255, nullable: true })
  updatedAt: any;

  @BeforeInsert()
  setCreateDate() {
    const vnTime = moment().format('YYYYMMDDHHmmss');
    this.createdAt = parseInt(vnTime);
  }

  @BeforeUpdate()
  setUpdateDate() {
    const vnTime = moment().format('YYYYMMDDHHmmss');
    this.updatedAt = parseInt(vnTime);
  }
}