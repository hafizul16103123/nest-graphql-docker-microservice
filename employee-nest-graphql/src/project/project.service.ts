import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { EmployeeService } from 'src/employee/employee.service';
import { Employee } from 'src/employee/entities/employee.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private projectModel: Model<typeof Project>,
    @InjectModel(Employee.name)
    private employeeModel: Model<typeof Employee>,
  ) {}
  async create(createEmployeeInput: CreateProjectInput) {
    const res = await this.projectModel.create(createEmployeeInput);
    return res;
  }

  async findAll() {
    const res = await this.projectModel.find();
    return res;
  }

  async findOne(id: string) {
    const project = await this.projectModel.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    return project;
  }

  update(id: number, updateProjectInput: UpdateProjectInput) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }

  async getEmployees(id: String) {
    const res = await this.employeeModel.find({ projectId: id });
    return res;
  }
}
