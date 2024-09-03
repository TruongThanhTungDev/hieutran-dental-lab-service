import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class MaterialDto {
  @ApiProperty({
    nullable: false,
    uniqueItems: false,
    description: 'Tên bài viết',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
  })
  @IsOptional()
  @IsNumber()
  type: number;
}