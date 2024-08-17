import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, Min, IsLongitude } from 'class-validator';

export class SearchProductDto {
  @ApiProperty({
    required: false,
    nullable: true,
    uniqueItems: false,
    description: 'Mã thẻ',
  })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty({
    required: false,
    nullable: true,
    uniqueItems: false,
    description: 'Tên bệnh nhân',
  })
  @IsOptional()
  @IsString()
  patientName?: string;

  @ApiProperty({
    required: false,
    nullable: true,
    uniqueItems: false,
    description: 'Giới tính',
  })
  @IsOptional()
  @IsNumber()
  sex?: number;

  @ApiProperty({
    required: false,
    nullable: true,
    uniqueItems: false,
    description: 'Phòng khám/Bác sĩ',
  })
  @IsOptional()
  @IsString()
  doctorClinic: string;

  @ApiProperty({
    required: false,
    nullable: true,
    uniqueItems: false,
    description: 'Số răng',
  })
  @IsOptional()
  @IsString()
  numberOfTeeth?: string;

  @ApiProperty({
    required: false,
    nullable: true,
    uniqueItems: false,
    description: 'Vật liệu',
  })
  @IsOptional()
  @IsString()
  material: string;

  @ApiProperty({
    required: false,
    nullable: true,
    uniqueItems: false,
    description: 'Thời gian bắt đầu bảo hành',
  })
  @IsOptional()
  @IsNumber()
  startDate?: number;

  @ApiProperty({
    required: false,
    nullable: true,
    uniqueItems: false,
    description: 'Thời gian kết thúc bảo hành',
  })
  @IsOptional()
  @IsNumber()
  endDate?: number;

  @ApiProperty({
    nullable: true,
    default: 1,
    description: 'Trang hiện tại',
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiProperty({
    nullable: true,
    default: 10,
    description: 'Số lượng sản phẩm mỗi trang',
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number = 10;
}
