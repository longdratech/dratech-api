import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Service {
  @Field(() => ID)
  id: number;

  @Field(() => String, { description: "icon convert base64" })
  icon: String;

  @Field(() => String, { description: "title is String. maxlength 30" })
  title: String;

  @Field(() => String, { description: "description is String. maxlength 30" })
  description: String;

  @Field(() => String, {
    description: "client is String. Khách hàng. example: Jhone Smith , USA- 02",
  })
  client: String;

  @Field(() => String, {
    description:
      "projectType is String. Loại dự án. Example: Search Engine Optimization",
  })
  projectType: String;

  @Field(() => String, {
    description: "content is String. Nội dung được gửi ở dạng RichText",
  })
  content: String;

  @Field(() => String, {
    description: "published is Bolean. Được công bố. Default: true",
  })
  published: String;

  @Field(() => String, {
    description: "published is Bolean. Được công bố. Default: true",
  })
  createdAt: String;
}
