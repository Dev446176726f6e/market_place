import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  image: string;

  @IsNumber()
  storeId: number;
}
