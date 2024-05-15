import { IsString, IsUrl, IsUUID } from "class-validator";

export class CreateBetDto {
  @IsUUID()
  readonly bookmakerId: string;

  @IsString()
  @IsUrl()
  readonly link: string;
}
