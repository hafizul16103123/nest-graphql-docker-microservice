import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name)
    private readonly locationModel: Model<typeof Location>,
  ) {}
  async create(createLocationInput: CreateLocationInput) {
    return await this.locationModel.create(createLocationInput);
  }

  async findAll() {
    return await this.locationModel.find();
  }

  async findOne(id: string) {
    return await this.locationModel.findOne({ _id: id });
  }

  update(id: number, updateLocationInput: UpdateLocationInput) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
