import { ApiProperty } from "@nestjs/swagger";
import { CommonEntity } from "src/common/entity/common.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class MaterialsEntity extends CommonEntity {
  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'CODE',
  })
  @Column({ nullable: false, unique: false, comment: 'CODE' })
  code: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'CODE',
  })
  @Column({ nullable: false, unique: false, comment: 'CODE' })
  name: string;
}