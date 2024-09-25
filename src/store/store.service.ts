import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Store } from './model/store.model';
import { Category } from 'src/category/model/category.model';

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store) private storeModel: typeof Store) {}

  async create(createStoreDto: CreateStoreDto) {
    const new_store = await this.storeModel.create(createStoreDto);
    return new_store;
  }

  findAll() {
    return this.storeModel.findAll({
      include: [{ model: Category, attributes: ['type'] }],
    });
  }

  findOne(id: number) {
    return this.storeModel.findByPk(id, {
      include: [{ model: Category, attributes: ['type'] }],
    });
  }

  async update(id: number, updateStoreDto: UpdateStoreDto) {
    const updated_store = await this.storeModel.update(updateStoreDto, {
      where: { id },
      returning: true,
    });
    return updated_store[1][0];
  }

  remove(id: number) {
    return this.storeModel.destroy({ where: { id } });
  }
}
