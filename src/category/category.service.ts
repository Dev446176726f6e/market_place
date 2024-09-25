import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './model/category.model';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryModule: typeof Category) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const new_cat = await this.categoryModule.create(createCategoryDto);
    return new_cat;
  }

  findAll() {
    return this.categoryModule.findAll();
  }

  findOne(id: number) {
    return this.categoryModule.findByPk(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const updated_cat = this.categoryModule.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });
    return updated_cat[1][0];
  }

  remove(id: number) {
    return this.categoryModule.destroy({ where: { id } });
  }
}
