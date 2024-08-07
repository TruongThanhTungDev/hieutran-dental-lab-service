import { ApiProperty } from "@nestjs/swagger";
import { CommonEntity } from "src/common/entity/common.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class UsersEntity extends CommonEntity {
  @ApiProperty({
    nullable: false,
    uniqueItems: true,
    description: 'Tài khoản',
  })
  @Column({ nullable: false, unique: true, comment: 'Tài khoản' })
  username: string;

  @ApiProperty({
    nullable: false,
    uniqueItems: true,
    description: 'Mật khẩu',
  })
  @Column({ nullable: false, unique: true, comment: 'Mật khẩu' })
  password: string;

  @ApiProperty({
    nullable: false,
    uniqueItems: true,
    description: 'Họ và tên',
  })
  @Column({ nullable: false, unique: true, comment: 'Họ và tên' })
  fullname: string;
}