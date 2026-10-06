import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, Min } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'João da Silva' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  full_name: string;

  @ApiProperty({ example: '12345678900' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  document: string;

  @ApiProperty({ example: 'Motorista' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  role: string;

  @ApiProperty({ example: 3500.0 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  salary: number;
}
