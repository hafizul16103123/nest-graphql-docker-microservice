import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './entities/employee.entity';

import { ProjectService } from 'src/project/project.service';
import { Project, ProjectSchema } from 'src/project/entities/project.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Project.name, schema: ProjectSchema },
    ]),
  ],
  providers: [EmployeeResolver, EmployeeService, ProjectService],
})
export class EmployeeModule {}
