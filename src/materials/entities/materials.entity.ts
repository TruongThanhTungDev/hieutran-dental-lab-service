import { ApiProperty } from "@nestjs/swagger";
import { CommonEntity } from "src/common/entity/common.entity";
import { TypeEntity } from "src/type-material-editor/entities/type-material-editor.entitiy";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class MaterialsEntity extends CommonEntity {
  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'title',
  })
  @Column({ nullable: false, unique: false, comment: 'title' })
  title: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'description',
  })
  @Column({
    nullable: false,
    unique: false,
    comment: 'description',
    type: 'longtext',
  })
  description: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'imageBackground',
  })
  @Column({ nullable: true, unique: false, comment: 'imageBackground' })
  imageBackground: string;

  @ManyToOne(() => TypeEntity, (topic) => topic.id)
  type: number;
}