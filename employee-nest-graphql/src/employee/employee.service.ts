import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose, { Connection, Model } from 'mongoose';
import { ProjectService } from 'src/project/project.service';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private employeeModel: Model<typeof Employee>,
    private projectService: ProjectService,
  ) {}
  async create(createEmployeeInput: CreateEmployeeInput) {
    const res = await this.employeeModel.create(createEmployeeInput);
    return res;
  }

  async findAll() {
    const res = await this.employeeModel.find();
    return res;
  }

  async findOne(id: string) {
    const res = await this.employeeModel.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    return res;
  }

  update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }

  async getProject(id: string) {
    const project = await this.projectService.findOne(id);
    return project;
  }
}
