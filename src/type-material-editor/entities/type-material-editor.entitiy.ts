import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { MaterialsEntity } from 'src/materials/entities/materials.entity';
import { CommonEntity } from 'src/common/entity/common.entity';


@Entity()
export class TypeEntity extends CommonEntity {
  @Column()
  title: string;

  @OneToMany(() => MaterialsEntity, (material) => material.type)
  materials: MaterialsEntity[]
}
