import { ApiProperty } from "@nestjs/swagger";
import { IsLongitude, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Long } from "typeorm";

export class ProductDto {
  @ApiProperty({
    nullable: false,
    uniqueItems: false,
    description: 'Mã thẻ',
  })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({
    nullable: false,
    uniqueItems: false,
    description: 'Tên bệnh nhân',
  })
  @IsNotEmpty()
  @IsString()
  patientName: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Giới tính',
  })
  @IsOptional()
  @IsNumber()
  sex?: number;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Phòng khám/Bác sĩ',
  })
  @IsOptional()
  @IsString()
  doctorClinic: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Số răng',
  })
  @IsOptional()
  @IsString()
  numberOfTeeth?: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Vật liệu',
  })
  @IsOptional()
  @IsString()
  material: string;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Thời gian bắt đầu bảo hành',
  })
  @IsOptional()
  @IsLongitude()
  startDate?: number;

  @ApiProperty({
    nullable: true,
    uniqueItems: false,
    description: 'Thời gian kết thúc bảo hành',
  })
  @IsOptional()
  @IsLongitude()
  endDate?: number;
}
