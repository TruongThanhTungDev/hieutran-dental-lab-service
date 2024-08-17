import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SearchByCodeDto {
  @ApiProperty({
    description: 'Mã thẻ',
  })
  @IsNotEmpty()
  @IsString()
  code: string;
}
