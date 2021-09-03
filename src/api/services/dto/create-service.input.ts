import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString, MaxLength } from "class-validator";

@InputType()
export class CreateServiceInput {
  @Field()
  @IsString()
  icon: string;

  @Field()
  @MaxLength(30)
  @IsString()
  title: string;

  @Field()
  @IsString()
  description: string;

  @Field()
  @IsString()
  client: string;

  @Field()
  @IsString()
  projectType: string;

  @Field()
  @IsString()
  content: string;

  @Field(() => Boolean)
  @IsOptional()
  published: boolean;
}
