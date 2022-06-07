/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { HousingOfferingUpdateManyWithoutUsersInput } from "./HousingOfferingUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { JobApplicantUpdateManyWithoutUsersInput } from "./JobApplicantUpdateManyWithoutUsersInput";
import { JobOfferingUpdateManyWithoutUsersInput } from "./JobOfferingUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => HousingOfferingUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HousingOfferingUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HousingOfferingUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  housingOfferings?: HousingOfferingUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => JobApplicantUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => JobApplicantUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => JobApplicantUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  jobApplicants?: JobApplicantUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => JobOfferingUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => JobOfferingUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => JobOfferingUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  jobOfferings?: JobOfferingUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mail?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  telephoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { UserUpdateInput };
