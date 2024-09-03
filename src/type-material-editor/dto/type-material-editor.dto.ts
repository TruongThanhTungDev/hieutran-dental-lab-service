import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class TypeMaterialDto { 
  @ApiProperty({
    nullable: true,
    uniqueItems: false
  })
  @IsOptional()
  @IsString()
  title: string
}