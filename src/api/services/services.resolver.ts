import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateServiceInput } from "./dto/create-service.input";
import { UpdateServiceInput } from "./dto/update-service.input";
import { Service } from "./entities/service.entity";
import { ServicesService } from "./services.service";

@Resolver(() => Service)
export class ServicesResolver {
  constructor(private readonly servicesService: ServicesService) {}

  @Mutation(() => Service)
  createService(@Args("input") input: CreateServiceInput) {
    return this.servicesService.create(input);
  }

  @Query(() => [Service], { name: "services" })
  findAll() {
    return this.servicesService.findAll();
  }

  @Query(() => Service, { name: "service" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.servicesService.findOne(id);
  }

  @Mutation(() => Service)
  updateService(@Args("update") update: UpdateServiceInput) {
    return this.servicesService.update(update.id, update);
  }

  @Mutation(() => Service)
  removeService(@Args("id", { type: () => Int }) id: number) {
    return this.servicesService.remove(id);
  }
}
