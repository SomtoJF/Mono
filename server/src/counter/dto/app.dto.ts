import { IsInt, IsNotEmpty } from 'class-validator';

export class AppDto {
  @IsInt()
  @IsNotEmpty()
  value: number;
}
