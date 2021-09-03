import { InputType, Int, Field } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";

@InputType()
export class CreateProjectInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  content: string;

  @Field()
  img: string;
}
