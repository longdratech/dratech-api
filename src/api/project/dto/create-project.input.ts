import { InputType, Int, Field } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";

@InputType()
export class CreateProjectInput {
  @Field(() => String, { description: "Title is String, maxlengh 30" })
  @MaxLength(30)
  title: string;

  @Field(() => String, { description: "content is String, maxlengh 30" })
  content: string;

  @Field(() => String, { description: "img is String, type base64" })
  img: string;
}
