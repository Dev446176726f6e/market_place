import { flatten } from '@nestjs/common';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Store } from 'src/store/model/store.model';

interface ICategoryCreationAttr {
  type: string;
  image: string;
  storeId: number;
}

@Table({ tableName: 'category', timestamps: false })
export class Category extends Model<Category, ICategoryCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @Column({ type: DataType.STRING, allowNull: false })
  image: string;

  @ForeignKey(() => Store)
  @Column({ type: DataType.INTEGER })
  storeId: number;

  @BelongsTo(() => Store)
  store: Store;
}
