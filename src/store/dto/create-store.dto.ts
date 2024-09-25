import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  image: string;

  @IsPhoneNumber('UZ')
  phone: string;

  @IsString()
  location: string;
}
