import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Employee } from 'src/employee/entities/employee.entity';
import { Location } from './entities/location.entity';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'projects' })
  findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Project)
  updateProject(
    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ) {
    return this.projectService.update(
      updateProjectInput.id,
      updateProjectInput,
    );
  }

  @Mutation(() => Project)
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.remove(id);
  }
  /**
   *
   * Resolved query type
   *
   */
  @ResolveField(() => [Employee], { name: 'projectEmployees' })
  async getEmployees(@Parent() project: Project | any) {
    return await this.projectService.getEmployees(project._id);
  }
  /**
   * Resolved query type through federation gateway
   * to gate data from location service
   *
   */

  @ResolveField(() => Location)
  location(@Parent() project: Project) {
    return { __typename: 'Location', id: project.locationId };
  }
}
