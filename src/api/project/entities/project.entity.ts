import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Project {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  img: string;

  @Field({ nullable: true })
  published: boolean;

  @Field()
  createdAt: Date;
}
